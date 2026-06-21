//asked in internal hcl project
const createSubscriptionManger =()=> {
    // your code comes here
    const listners = new Set();

    const subscribe = (callback)=>{
        if(typeof callback !== "function"){
            throw new TypeError("Subcsribe callback : callback must be function")
        }
        listners.add(callback);
        let active = true;
        //return an unsubscribe function

        return () => {
            if(!active) return false;
            active = false;
            return listners.delete(callback);
        }

        
    }
    const publish =(data)=>{
            for(const cb of Array.from(listners)){
                try {
                    cb(data);
                } catch (error) {
                    
                }
            }
        }
        const clear = () => listners.clear();
        const count = () => listners.size;


    return {
        subscribe,
        publish,
        clear,
        count
    }
}

const manager = createSubscriptionManger();

const sub1 = manager.subscribe((data) => {
    console.log("Subscribe 1: ", data);
})

const sub2 = manager.subscribe((data) => {
    console.log("Subscribe 2: ", data);
})




manager.publish("Event A")
//Subscriber 1 : Event A
//Subscriber 2 : Event A


sub1(); // unsubscribe first subscriber

manager.publish("Event B")
//Subscriber 2 : Event B