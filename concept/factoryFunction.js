/*
factory function in javascript is simply a function that creates and return objects - without using new , 
class, or prototype directly
it's great for composition , encapuslation via closure
*/

function friendFactory(friendName){
    return {
        friendName,
        talk(){
            console.log(`Hello I am ${friendName}`)
        }
    }
}

let friendOne = friendFactory("Raju");
let friendTwo = friendFactory("dheelu");

friendOne.talk();
friendTwo.talk();

function createUser(name, role="viewwer"){
    return {
        name,
        role,
        describe(){
            return `${this.name} ${this.role}`
        }
    }
}

const u1 = createUser("Bilal", "lead");
console.log(u1.describe());

// Encapusation with private state (closure)

function createCounter(start=0){
    let count = start //private
    return{
        inc(){count += 1},
        dec(){count -= 1},
        get(){return count}

    }

}

const c = createCounter(10);
c.inc();
console.log(c.get())//11
console.log(c.count)//undefined (private)