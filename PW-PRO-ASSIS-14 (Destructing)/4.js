console.log("================================");


function extractArray(arr) {
    let [f,s,...rest] = arr
    let a = arr.pop()
    return [f,s,a]
    
}



let arr = [1,2,3,4,5]
console.log(extractArray(arr))



console.log("================================");



