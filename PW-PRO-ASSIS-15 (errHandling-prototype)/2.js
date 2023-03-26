// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.

console.log("----------------------------------")

function getPerson(obj)
{
    try
    {
        if (typeof obj !== "object" || !("name" in obj) || !("age"  in obj) ) {
            
            throw "Invalid parameter type"
        }
        return `Name:${obj.name},Age:${obj.age}`

    }catch(error)
    {
        return error
    }
}
console.log(getPerson({name:"ravi",age:20}))
console.log(getPerson())

console.log("----------------------------------")