// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.



async function callApi(){

    try {

        let promise  = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!promise.ok) {
            throw promise.statusText
        }
        let afterPromise = await promise.json()
        console.log(afterPromise)
        
    } catch (error) {
        console.log("ERROR ",error)
    }

}


callApi()