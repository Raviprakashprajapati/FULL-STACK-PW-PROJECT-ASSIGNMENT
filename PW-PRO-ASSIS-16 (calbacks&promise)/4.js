// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.




const books= [
    {title:"python" , author:"boheman " , year:1994},
    {title:"Data structure" , author:"scoot lary" , year:1956},
    {title:"C programming" , author:"Dennis ritchie" , year:1989},
]

function logTitles(title){
    console.log(title.sort())
}


const titles = books.map(books=>books.title)

logTitles(titles)