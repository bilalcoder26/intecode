// subscriber.js (multiple independent subscribers)

const bus = require("./bus");

//send email
bus.on('order:created', async(evt) => {
    console.log('[email] sending confirmation for order ', evt.id)

    //await emailClient.send(...)
})

//update analytics
bus.on('order:created', async(evt) => {
    console.log('[analytics] tracking order ', evt.id, 'total', evt.total);
      //await analytics.track(...)
})

//reserve inventory
bus.on('order:created', async(evt) => {
    console.log('[inventory] reserving for order ', evt.id)
      //await inventory.reserve(...)

})