let user = { name: "John", age: 30 };
console.log("age" in user)

/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user2 ={};
user2.name ="Jhon"
user2.surName="smith"
user2.name="pete"
delete user2.name;

console.log('user2', user2)


let schedule ={
};

function isEmpty(obj){
    for(let key in obj){
        return false

    }
    return true
}

console.log('isEmpty', isEmpty(schedule))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let totalSalaries = 0;
  for(let key in salaries){
    totalSalaries += salaries[key]
  }
  console.log('total', totalSalaries)

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multipleNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
    return obj

  }

  console.log('multiple', multipleNumeric(menu))