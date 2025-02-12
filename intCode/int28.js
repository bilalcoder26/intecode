// [12,4,8,9,[7,89,7],[4],[1,2,3],9,[[4,5],8]] = out = [12,4,8,9,7,89,7,4,1,2,3,9,4,5,8]

    function convertSingleArr(arr){
        if(!arr.length) return []
        let result =[];
        arr.forEach((element) => {
            if(Array.isArray(element)){
                result.push(...convertSingleArr(element))

            }else{
                result.push(element)
            }
        })
        return result

    }
    console.log(convertSingleArr([12,4,8,9,[7,89,7],[4],[1,2,3],9,[[4,5],8]]))