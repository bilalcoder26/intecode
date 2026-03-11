const createSubscriptionManger = (option={}) => {
    const { onError } = option ; // optional : (err, cb, argArray) => void

    const listners = new Set();

    const subscribe = (callback) => {
        if(typeof callback !== 'function'){
            throw new TypeError("subscribe(callback ): callback must be function");
        }
        listners.add(callback);

        let active = true;

        return () => {
            if(!active) return false;
            active = false
            return listners.delete(callback);
        }

    }

    const once = (callback) => {
        if(typeof callback !== 'function'){
            throw new TypeError("subscribe(callback ): callback must be function");
        }

        let unsub;
        const wrapper = (...args) => {
            //Ensure unsubscribe happens even if callback throws
            if(unsub) unsub();
            try {
                callback(...args);
                
            } catch (error) {
                if(onError) onError(error, callback, args);
                
            }
        }
        unsub = subscribe(wrapper);

        return unsub

    }


    //semantics:
    //1) synchronous delivery, in inseration order

    const publish = (...args) => {

        for(const cb of Array.from(listners)){
            try {
                cb(...args);
            } catch (error) {
                if(onError) onError(error, cb, args);
            }
        }

    }

    const clear = () => {
        const n = listners.size
        listners.clear();
        return n

    }
    const count = () => listners.size

    return {
        subscribe,
        once,
        publish,
        clear,
        count
    }

}

const manager = createSubscriptionManger();

const u = manager.subscribe(() => console.log("Hello"));
manager.once(() => console.log("Only once"));
manager.subscribe((msg) => {
  console.log("Listener 1:", msg);
});

manager.subscribe((msg) => {
  console.log("Listener 2:", msg);
});

manager.publish("Hello");


// manager.publish(); // Hello

// u();               // unsubscribe
// manager.publish(); // nothing happens

// u();               // false (already unsubscribed)

// manager.publish(); // nothing happens

