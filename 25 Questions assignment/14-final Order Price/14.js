


const finalPrice=(obj)=>{

    let total = 0
    obj.forEach((i) => {
        total+=i.quantity * i.price
    });
    return total
}





let cart = [
    { quantity:1,price:5 },
    { quantity:1,price:10 },
    { quantity:2,price:20 },

]

console.log("============================")
console.log(finalPrice(cart))
console.log("============================")