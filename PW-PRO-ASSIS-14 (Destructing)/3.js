console.log("==========================")


function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  

  let x = 5;
  let y = 10;

//   console.log(x,y)
  [x, y] = swapValues(x, y);
  console.log(x,y)


  
console.log("==========================")

