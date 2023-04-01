// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

console.log("------------------------------------")




function doublefunct(arr,callback){

    const twice = arr.map(callback)
    return twice
}


let arr = [1,2,3]
const doubleArray = doublefunct(arr,(i)=>{
    return i*2
})


console.log(doubleArray)





console.log("------------------------------------")