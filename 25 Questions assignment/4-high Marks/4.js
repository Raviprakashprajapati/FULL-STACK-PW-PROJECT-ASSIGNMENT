
let marks  = [43,453,768,32,90]
let high = 0
    marks.forEach((i)=>{
       
       high =  high<i?i:high
        
    })
    
    
    console.log("=================================")
    console.log("Highesht marks of the student is ",high)
    console.log("=================================")