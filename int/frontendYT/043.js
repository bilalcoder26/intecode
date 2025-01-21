function addItem(item,list){
    return list.push(item)
}
const result = addItem('a',['b'])
console.log(result);//2

/*
The push Method:

list.push(item) adds the item to the end of the list.
It modifies the array in place and returns the new length of the array after the item is added.
Execution of addItem('a', ['b']):

The function is called with:
item = 'a'
list = ['b']

'a' is added to list, making it ['b', 'a'].
list.push('a') returns the new length of list, which is 2.
Value of result:

result gets the value returned by list.push(item), which is 2.
*/