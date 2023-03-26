console.log("---------------------------------------")


class User
{
    constructor(name,password)
    {
        this.username= name;
        this.password = password;
    }
    get Password(){ return this.password.replace(/./g,"*") }
    
    set Password(x)
    {
        const regex = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
        if ( regex.test(x)) {
            this.password = x
        }
        else
        {
            console.log("Invalid password,Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
    }


}

let user1 = new User("ravi","rVoiHFDn2140-;'.")
// console.log(user1.getPassword)
user1.setPassword = "newPassword1@123"
console.log(user1.Password)
















































console.log("---------------------------------------")