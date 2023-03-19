console.log("================================");


function countWord(str) {
    let word = str.split(" ")
    let count = new Map()
    for (let i of word ) {
        if (count.has(i)) {
         count.set(i,count.get(i)+1)   
        }
        else        
        {
            count.set(i,1)
        }
    }
    return count

}

let a = "hello guys i am a stduent of pwskills and pwskills is provide best education to the student "
console.log(countWord(a))





console.log("================================");