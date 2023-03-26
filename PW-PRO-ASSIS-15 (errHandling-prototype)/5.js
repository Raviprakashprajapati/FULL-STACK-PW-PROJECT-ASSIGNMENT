console.log("--------------------------------")


class Person
{
    constructor(name="unknown",age=0)
    {
        this.name= name;
        this.age = age;
    }

    getDetails(){ return `Name: ${this.name} , Age: ${this.age}` }

}

let p1 = new Person()
console.log(p1.getDetails())

let p2 = new Person("ravi",45)
console.log(p2.getDetails())







































console.log("--------------------------------")

