//4. Caching Strategy
//Multi-Level Caching

const Redis = require('ioredis');
const NodeCache = require('node-cache');

// L1: In-memory cache (fast, per instance)
const memoryCache = new NodeCache({ 
  stdTTL: 60, 
  checkperiod: 120,
  maxKeys: 1000 
});

// L2: Redis cache (shared across instances)
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: 6379,
  enableReadyCheck: true,
});

// Cache middleware
function cache(ttl = 300, keyPrefix = 'api') {
  return async (req, res, next) => {
    const cacheKey = `${keyPrefix}:${req.user?.id || 'anon'}:${req.originalUrl}`;
    
    // Try memory cache first
    let cachedData = memoryCache.get(cacheKey);
    if (cachedData) {
      return res.json(cachedData);
    }
    
    // Try Redis
    cachedData = await redis.get(cacheKey);
    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      memoryCache.set(cacheKey, parsed, 30); // Populate L1
      return res.json(parsed);
    }
    
    // Store original send function
    const originalSend = res.json;
    res.json = function(data) {
      memoryCache.set(cacheKey, data, 30);
      redis.setex(cacheKey, ttl, JSON.stringify(data));
      originalSend.call(this, data);
    };
    
    next();
  };
}

// Usage
app.get('/api/products/:id', cache(600, 'product'), async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Cache invalidation on write
app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body);
  
  // Invalidate cache pattern
  const keys = await redis.keys('api:product:*');
  if (keys.length) await redis.del(keys);
  
  res.status(201).json(product);
});