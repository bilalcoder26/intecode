const STATE ={
    PENDING :"pending",
    FULFILLED:"fulfilled",
    REJECTED:"rejected"
}

class MyPromise{
    #value ="";
    #state = STATE.PENDING
    #thencbs =[];
    #catchcbs =[];
    constructor(callBack){
        try {
             callBack(this.#onSucess, this.#onFail)
        } catch (error) {
            this.#onFail(error);
            
        }
       
    }

    #runCallbacks =()=>{
        queueMicrotask(()=> {
            if(this.#state === STATE.FULFILLED){
            this.#thencbs.forEach((cb) => {
                cb(this.#value)
            })
         this.#thencbs = [];   
        }
        if(this.#state === STATE.REJECTED){
            this.#catchcbs.forEach((cb) => {
                cb(this.#value)
            })
         this.#catchcbs = [];   

        }
        })
    }
    //ONRESOLVE
    #onSucess =(value)=>{
        if(this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
    }
    //ONREJECTED
    #onFail =(value)=>{
        if(this.#state !== STATE.PENDING) return
        if(!this.#catchcbs.length){
            throw new Error("Uncaught promise")
        }
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()

    }
    
    then=(thenCb, catchCb)=>{
        return new MyPromise((resolve, reject) => {

            this.#thencbs.push((value) => {
                if(thenCb == null){
                    resolve(value)
                    return;

                }
                const res = thenCb(value);
                resolve(res);
            })
             this.#catchcbs.push((result) => {
                if(catchCb == null){
                    reject(result)
                    return;

                }
                resolve(catchCb(result));
            })
            this.#runCallbacks()
            
        })

    }
    catch(cb){
        return this.then(undefined, cb)
    }

    static resolve =(data)=> {
        return new MyPromise(function(resolve){
            resolve(data);
        })
    }
    static reject = (err)=> {
        return new MyPromise(function(_,reject){
            reject(err);
        })
    }
}



// const promiseOg = new Promise((resolve, reject) => {
    
// })

// console.log("my",myPromise.value)
// console.log("org",promiseOg)

// const myPromise = new MyPromise(function(resolve,reject){
// setTimeout(() => {
// // resolve("done")
// reject("error")
// },1000)
// })


// console.log("1")
// myPromise.catch((err)=>{
//     console.log(err)
// })
// console.log("2")

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
p.then((val) => {
  console.log("first :", val);
  return val * 2;
})
  .then((val) => {
    console.log("second :", val);
    return MyPromise.resolve(val + 5);
  })
  .then((val) => {
    console.log("Third :", val);
    throw new Error("something went wrong");
  })
  .catch((err) => {
    console.error("caught error :", err.message);
  });