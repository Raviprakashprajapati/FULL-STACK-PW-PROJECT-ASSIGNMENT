console.log("----------------------------------------")

function numberCheckers(arr)
{
    return function(n){
        return arr.includes(n)
    }
}


const arr = [1,2,3,4,5]
const checkNumber = numberCheckers(arr)
// console.log(checkNumber)
console.log(checkNumber(7))










console.log("----------------------------------------")