const noteListDiv = document.getElementsByClassName("note-list")[0]
// const del = document.getElementById("btn-del")
const delAll = document.getElementById("btn-all")

let noteId = 1

let input = document.getElementsByClassName("input")[0]
let detail = document.getElementsByClassName("inputDetail")[0]

let add = document.getElementsByClassName("btnAdd")[0]
var note = 0




add.addEventListener("click",(e)=>{
    e.preventDefault();

    if (input.value=="" || detail.value == "") {
        console.log("nothing")
    }
    else{
    //     console.log(input.value)
    // console.log(detail.value)

    noteListDiv.classList.remove("display")
    let div = document.createElement("div")
    div.classList.add("note-item")
    div.innerHTML += `
    <h3>${input.value}</h3>
    <p>${detail.value}</p>
    <button id="btn-del" class="delbtn"  >Remove</button>`

    noteListDiv.appendChild(div)

    input.value = ""
    detail.value = ""

    
        // ?delete div
  
        // let del = document.getElementById("btn-del")
        // del.addEventListener('click',(e)=>{
            
        //    console.log(del.classList)
            
        // }     
        
    }

})




// del btn

noteListDiv.addEventListener("click",(e)=>{
    console.log(e.target)
    if (e.target.classList.contains("delbtn")) {
        e.target.parentElement.remove()
    }
})











delAll.addEventListener("click",()=>{

    console.log("delete all")

    let div = document.getElementsByClassName("note-item")
    while (div.length>0) {
        // console.log(div.length)
        div[0].remove()
        noteListDiv.classList.add("display")
    }
    
    noteListDiv.classList.add("display")

})

