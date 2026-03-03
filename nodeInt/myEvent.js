class Emitter {
    //define the class to encapsulate state and method
    constructor(){
        //store listener per events name; Map is cleaner than objects for arbitraryKey
        this._event = new Map()
    }


    //subscribe to an events
    on(event, listener){
        if(typeof listener !== 'function'){
            throw new Error("Listner must be function");
        }
        const arr = this._event.get(event); // retrieve existing listners
        if(arr){
            arr.push(listener); //append the existing listner
        }else{
            this._event.set(event, [listener]) // create a new list
        }
        return this;   // supporting chaining : emitter.on(...).on(...)
    }

    //unsubscribe a specific listner
    off(event, listener){
        const arr = this._event.get(event);
        if(!arr) return this;
        const idx = arr.indexOf(listener);  // find the exact function reference
        if(idx !== -1){
            arr.splice(idx, 1); // remove it in-place
            if(arr.length === 0){
                this._event.delete(event);  // clean up empty to free memory
            }
        }
        return this;
    }

    //subscribe to run only once
    once(event, listener){
        const wrapper = (...args) => { // wrap the original listner
            try{
                listener.apply(this, args); // call original with the same args and  'this'
            }finally{
                this.off(event, wrapper); // ensure removal even if listner throws
            }
        }
        return this.on(event, wrapper); // register the wrapper instead of the original
    }



    //publish an event with argument
    emit(event, ...args){
        const arr = this._event.get(event);
        if(!arr || arr.length === 0) return false;  // signal "no listners"
        const snapshot = arr.slice() // clone to avoid mutation issues mid-iteration
        for(const fn of snapshot){
            fn.apply(this, args); // call each listner synchronously
        }
        return true; // signal "Handled"
    }

    //helper : how many listner for an event?

    listenerCount(event){
        const arr = this._event.get(event);
        return arr ? arr.length :0;
    }

    //Remove all listners, optionally for just one events
    removeAllListner(event){
        if(typeof event === 'undefined'){
            this._event.clear(); // wipe everything
        }else{
            this._event.delete(event) // wipe spefic event
        }
        return this;

    }
}

const bus = new Emitter()
console.log(bus)

let n =0;
const inc = () =>  n +=1;

bus.on('tick', inc);
bus.once('tick', () => n += 10);
bus.emit('tick')
bus.emit('tick')
bus.off('tick',inc);
bus.emit('tick')
console.log(n)