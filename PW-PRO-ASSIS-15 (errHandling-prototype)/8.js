console.log("---------------------------------")

function Student(n)
{
    this.Name = n
}

Student.prototype.printDetails =function(){ console.log( `Hello,my name is ${this.Name}`) } 

let st1 = new Student("ravi")
st1.printDetails()





























console.log("---------------------------------")