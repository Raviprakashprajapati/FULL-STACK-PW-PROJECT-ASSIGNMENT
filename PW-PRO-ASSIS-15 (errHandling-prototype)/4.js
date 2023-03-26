console.log("-------------------------------------")

class Employee
{
    constructor(name,position,salary)
    {
        this.name = name
        this.position = position
        this.salary = salary
    }

    get getsalary(){ return this.salary }
}

let ep1 = new Employee("harry","Manager",500000)
console.log(ep1.getsalary)





































console.log("-------------------------------------")

