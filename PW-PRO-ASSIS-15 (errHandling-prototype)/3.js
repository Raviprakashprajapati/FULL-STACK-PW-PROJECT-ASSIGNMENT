
console.log("--------------------------")

class car
{
    constructor(com,mod,yea)
    {
        this.company = com
        this.model = mod
        this.year = yea
    }
    getDescription()
    {
        return `this is a ${this.year} ${this.company} ${this.model}`
    }
}

let mycar = new car("TATA","XUV420","2024")
console.log(mycar.getDescription())


console.log("--------------------------")