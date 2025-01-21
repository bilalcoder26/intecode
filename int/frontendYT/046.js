async function getData(){
    return await Promise.resolve('ok')
}

const data = getData()
console.log(data); //Promise { <pending> }

// to get a data  we should use .then()

data.then((res) => console.log({res}));