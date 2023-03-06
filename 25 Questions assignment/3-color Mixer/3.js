function colorMixer(color1,color2) {

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue": console.log("red+blue = ","PURPLE")
                break;
                case "yellow": console.log("red+yellow","ORANGE")
                break;
                default: console.log("Invalid color combination ")
             
             }
        break;
        
        case "blue":
            switch (color2) {
                case "yellow": console.log("blue+yellow = ","GREEN")
                break;
                case "red" : console.log("blue+red = ","PURPLE")
                break;
                default: console.log("Invalid color combination")
               
                }
        break
        
        case "yellow":
            switch (color2) {
                case "red": console.log("yellow+red = ORANGE")
                break                  
                case "blue": console.log("yellow+blue = GREEN ")            
                break
                default:  console.log("Invalid color combination")
                  
            }
        break
            
            
    
        default:  console.log("Invalid color combination")
           
    }
    
}
console.log("=======================")
colorMixer("red","blue")
colorMixer("yellow","blue")
colorMixer("yellow","red")
colorMixer("yellow","yellow")
console.log("=======================")


