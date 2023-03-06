let a = 5
let b = 6
let op = '+'

switch (op) {
    case '+': console.log(`${a} + ${b} = ${a+b}`)
    break;
    case '-': console.log(`${a} - ${b} = ${a-b}`)
    break;
    case '*': console.log(`${a} * ${b} = ${a*b}`)
    break;
    case '/': console.log(`${a} / ${b} = ${a/b}`)
    break;
    default: console.log("Invalid operatror")
        break;
        
    
}