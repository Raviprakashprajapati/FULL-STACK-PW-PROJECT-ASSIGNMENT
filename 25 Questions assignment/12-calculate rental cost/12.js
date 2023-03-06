



const carRentCost = (car,day)=>{

    if (car == "economic") {
        let rent = 4000
        return `Rent cost of |${car}| for ${day} days is ${rent*day} `
    }

    else   if (car == "midsize") {
        let rent = 10000
        return `Rent cost of |${car}| for ${day} days is ${rent*day} `
    }

    else   if (car == "luxury") {
        let rent = 20000
        return `Rent cost of |${car}| for ${day} days is ${rent*day} `
    }

}

    


console.log("===========================")
console.log(carRentCost("economic",4))
console.log("===========================")
console.log(carRentCost("luxury",7))
console.log("===========================")






























