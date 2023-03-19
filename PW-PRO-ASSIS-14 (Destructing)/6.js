console.log("==============================")


function extract(person) {
    let {Name,address:{street}} = person
    return {Name:Name, street:street }
    
}


const person = {
    Name:"ravi",
    age:21,
    address:{
        street:"b5 block,IT field",
        city:"sector-45 sadarpur",
        state:"uttar pradesh"
    }
}

console.log(extract(person))








console.log("==============================")

