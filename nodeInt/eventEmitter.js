const EventEmitter = require("events");

const bus = new EventEmitter();
bus.on('greet',(name) => {
    console.log("hello , " + " " + name);
})
bus.emit('greet', 'Bilal');
bus.emit('greet', 'sonu');
bus.emit('greet', 'sumit');
bus.emit('greet', 'rohit');

class Job extends EventEmitter {
    start(payload){
        this.emit('start', payload);
        try {
            const result = compute(payload);
            this.emit("success", result);
            
        } catch (error) {
            this.emit("error", error)
            
        }finally {
            this.emit('done');
        }
    }
}

const job = new Job();
job.on('start', p => console.log("started", p));
job.on('success', r=> console.log("success", r));
job.on('error', e=> console.log("error", e.message))
job.on('done', () => console.log("Done"));

job.start({id:1})