// pubsub class -- this will manage events and subscribers
class pubSub{
    constructor(){
        /*
        This object stores all events
        format: {
            eventName: [callback1, callback2]
        }
        */
       this.events = {};
    }

    //subscribe methode : register a listner for an event

    subscribe(eventName, callback){
        //If events doesnot exist , create empty array
        // why : multiple subscribers ho skte hain

        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        // add callback into array
        // what : store subscriber function
        // why : jab event fire hoga , ye function call hoga

        this.events[eventName].push(callback)

    }

    //publish method: trigger an event

    publish(eventName, data){
        //get all subscribers of this event
        const subscribers = this.events[eventName];

        //check if subscriber exists

        if(subscribers){

            //loop through all subscribers

            subscribers.forEach((callback) => {
                // call each subscriber with data
                // what : notify subscriber
                // why : yehi main kaam hai pub/sub ka

                callback(data);
            })
        }
    }

    // unsubscribe method: remove a subscribe

    unsubscribe(eventName, callbackToRemove){
        const subscribers = this.events[eventName];

        if(subscribers){
            // filter out the callback to remove
            // what : new array without that function
            // why : unnecessary calls avoid karne ke liye

            this.events[eventName] = subscribers.filter(
                (callback) => callback !== callbackToRemove
            );
        }
    }

}

//create instance of pubsbub

const pubsub = new pubSub();

//step1 : create subscribers

//subscriber1
function emailService(data){
    console.log("Email service received: ", data);
}

//subscriber2
function smsService(data){
    console.log("sms service received: ", data);
}

//subscriber3
function notificationService(data){
    console.log("notification service received: ", data);
}

// step2: subscriber to event

pubsub.subscribe("orderPlaced", emailService);
pubsub.subscribe("orderPlaced", smsService)
pubsub.subscribe("notification", notificationService)

/*
what: register kar diya listners
memory me kya hua:

{
    orderPlaced:[emailService, smsService]
}

*/

pubsub.publish("orderPlaced",{orderId:501})
pubsub.publish("notification",{orderId:501})

/*
what: event fire hua
How internally

Loop chala:
emailService(data)
smsService(data)
*/