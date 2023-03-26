console.log("--------------------------------------")

function filterByCategory(arr)
{
    return function(cat){
        return arr.filter((i=>i.category == cat)).map((i)=>{
            return i
        })
    }

}

var product = [
    {name:"shirt",category:"clothing"},
    {name:"pants",category:"clothing"},
    {name:"hat",category:"Acessories"},
    {name:"Sunglasses",category:"Acessories"},
]


var clothingProducts = filterByCategory(product)
console.log(clothingProducts('clothing'))





console.log("--------------------------------------")