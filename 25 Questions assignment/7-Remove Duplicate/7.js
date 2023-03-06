

const removeDuplicate=(cart)=>{

    let newCart = []
    for(let i=0;i<cart.length;i++)
    {
        if (newCart.includes(cart[i])==false) {
            newCart.push(cart[i])
            
        }
    }

    return newCart

}




let personcart = ["redmi","oneplus","poco","nothing","iphone","nothing","poco"]
console.log("==================================")
console.log(removeDuplicate(personcart))
console.log("==================================")