// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

console.log("-------------------------------------")

function upperString(str)
{
    const a = str.toUpperCase()

    function logString(){
        console.log(`the manipulate string is :${a}`)
    }

    return logString

}



let string = "hello my name is ravi"

 let final = upperString(string)
final()












console.log("-------------------------------------")