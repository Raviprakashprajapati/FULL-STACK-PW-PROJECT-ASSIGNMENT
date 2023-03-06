

const vowelcount =(n)=>{

    let count = 0
    for(let i=0;i<n.length;i++){
        if (n[i] == 'a'|| n[i]=='e' || n[i]=='i' || n[i]=='o' || n[i]=='u' || n[i]=='A' || n[i]=='E' || n[i]=='I' || n[i]=='O' || n[i]=='U') {
            count++          
        }
    }
    
        return count
}

let Name = "Ravi"
console.log("number of vowels in ",Name ," is = ",vowelcount(Name))
















