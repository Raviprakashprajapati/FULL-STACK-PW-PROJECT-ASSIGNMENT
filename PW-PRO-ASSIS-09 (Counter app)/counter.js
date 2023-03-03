let dec = document.getElementById("btn-dec")
let inc = document.getElementById("btn-inc")
let result = document.getElementById("displayValue") 
let btnresult = document.getElementById("reset")   


inc.addEventListener("click", () => {
    const value = Number(result.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      result.innerText = value + 1; 
    }
  });

  
dec.addEventListener("click",()=>{

    const value = Number(result.innerText);
  if (value > 0) {
    result.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
})


  // for reset button click
btnresult.addEventListener("click", () => {
    result.innerText = 0;
  });