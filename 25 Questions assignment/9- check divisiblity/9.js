

const checkDivisiblity = (a)=>{

    let arr = []
    for(let i =0 ;i<a.length;i++)
    {
        if (a[i]%3==0 && a[i]%2!=0) {
            arr.push(a[i])
        }

    }
    console.log("================")
    console.log(arr)
    console.log("================")
}



let arr  = [34,454,15,325,234,5643,643,34,45,345]
checkDivisiblity(arr)