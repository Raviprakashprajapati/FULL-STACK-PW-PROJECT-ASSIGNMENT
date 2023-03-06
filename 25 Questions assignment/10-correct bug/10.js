

const fixCart=(a)=>{

    let arr = []
    for(let i =0;i<a.length;i++)
    {
            arr.push(a[i]*2)
    }
        return arr
}





let cart = [1, 2, 3, 4];
cart = fixCart(cart);
console.log('=======================')
console.log(cart); 
console.log('=======================')
