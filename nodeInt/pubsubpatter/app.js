const { createOrder } = require('./order-service');
require("./subscribers")

createOrder({id:101, total:299.99, userId:'u-78'})