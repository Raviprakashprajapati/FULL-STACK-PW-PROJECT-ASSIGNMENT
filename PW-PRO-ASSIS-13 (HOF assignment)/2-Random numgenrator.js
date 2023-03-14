let delay = 3000
let remainningTime = delay

console.log("Delaying for "+(delay/1000)+" sec ")

const interval = setInterval(() => {
    remainningTime-=1000
    console.log("genrating random number in "+ (remainningTime/1000) + " sec " )
}, 1000);

setTimeout(() => {
    clearInterval(interval)
    console.log("Gnerating ranodm numbner = ")
    console.log("Random number is ", Math.floor(Math.random()*29) )

}, delay);