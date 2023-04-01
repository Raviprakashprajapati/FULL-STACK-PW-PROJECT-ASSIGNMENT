// Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

console.log("--------------------------------")


async function callApi(){

    try {
        let promise = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!promise.ok) {
            throw promise.statusText
        }
        let afterPromise = await promise.json()
        console.log(afterPromise)
        
    } catch (error) {
        console.log("ERROR " ,error)
    }
}


callApi()

























console.log("--------------------------------")