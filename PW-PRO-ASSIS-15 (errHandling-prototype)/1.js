// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

console.log("----------------------------------")
function convertToNumber(input)
{
    try
    {
        const number = Number(input)
        if (isNaN(number)) {
            throw "invalid number"
        }
        return number
        
    }
    catch(error)
    {
      return error
    }

}



console.log(convertToNumber("123"))
console.log(convertToNumber("fssgsr"))

console.log("----------------------------------")