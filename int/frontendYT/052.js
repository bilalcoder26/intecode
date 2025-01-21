function getItems(list,...args,moreItems){
    return [...list,...args, moreItems]
}
getItems(['berry', 'apple'], 'pear', 'kiwi')

//Rest parameter must be last formal parameter