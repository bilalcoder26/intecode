// order-service.js (publisher)

const bus = require("./bus");

function createOrder(order){
    //... write to DB , validate , etc
    console.log("Order created: ", order.id);

    //Publish an event
    bus.emit("order:created ", {
        id:order.id,
        total:order.total,
        userId: order.userId
    })
}

module.exports = {
    createOrder
}