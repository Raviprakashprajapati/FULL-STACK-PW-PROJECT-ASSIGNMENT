// let input = document.getElementById("input")
// let btn = document.getElementById("btn")
// let ul = document.getElementById("ul")

// let note = []
// const add =()=>{
//       if (input.value !== "") {
//         note.push(input.value)
//         input.value = ""
//        let li = document.createElement('li')
//        li.innerHTML= note + "<hr>"
//        ul.appendChild(li)

//       }
//       note.length = 0
// }



// btn.addEventListener("click",add)
// ----------------------------------------------------------


let input = document.getElementById("input")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")

let note = []
const add =()=>{
      if (input.value !== "") {
        note.push(input.value)
        input.value = ""
       let li = document.createElement('li')
       li.innerHTML= note + "<hr>"
       ul.appendChild(li)
      
      }
      note.length = 0
}



btn.addEventListener("click",add)




























