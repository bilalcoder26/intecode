// ❌ BAD - N+1 queries
app.get('/users', async (req, res) => {
  const users = await User.find();
  for (const user of users) {
    user.orders = await Order.find({ userId: user.id }); // N queries!
  }
  res.json(users);
});

// ✅ GOOD - Use joins or aggregation
app.get('/users', async (req, res) => {
  const users = await User.aggregate([
    {
      $lookup: {
        from: 'orders',
        localField: '_id',
        foreignField: 'userId',
        as: 'orders'
      }
    },
    { $limit: 100 },
    { $project: { password: 0 } } // Exclude sensitive data
  ]);
  res.json(users);
});

// Use indexes
// db.users.createIndex({ email: 1 })
// db.orders.createIndex({ userId: 1, createdAt: -1 })