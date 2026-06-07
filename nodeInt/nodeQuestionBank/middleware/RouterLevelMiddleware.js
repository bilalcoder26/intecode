// 2. Router-Level Middleware
//Same as application-level but bound to an instance of express.Router().

const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

router.get('/profile', (req, res) => {
  res.send('User profile');
});

app.use('/user', router);