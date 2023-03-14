
let book = [

    {Title:"Clanguage",Author:"dennis",Year:1998},
    {Title:"Python",Author:"harry",Year:2003},
    {Title:"Java",Author:"carry",Year:2022},
]


const a = book.filter((i=>i.Year>2010)).map(i => {
    return {
      title: i.Title,
      author: i.Author.toUpperCase(),
      year: i.Year
    };
  });

  console.log(a)
















// let a = book.filter((i)=>{
//     if (i.Year<2010) {
//            let a = i.Author.toUpperCase()
//         return {Title:i.Title,
//             Author:i.Author.trim().toUpperCase().trimEnd().slice(4:7),
//             Year:i.Year}
//     }
// })

// console.log(a)


