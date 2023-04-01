// 9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// to simulate an error, and then display an error message on the webpage.

console.log("----------------------------------")


async function callApi(){

    try {

        let promise = await fetch('https://jsonplaceholder.typicode.com/posts/123456789')
        if (!promise.ok) {
            throw [ promise.status,promise.statusText ]
        }
        let afterPromise = await promise.json()
        console.log(afterPromise)
        
    } catch (error) {
        console.log("ERROR  ",error)
    }

}



callApi()












console.log("----------------------------------")
