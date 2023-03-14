console.log("=========================================================")
const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]+$/;

const url1 = "http://www.example.com";
const url2 = "https://example.com/page?id=123";
const url3 = "ftp://example.com";
const url4 = "https://1234.com";
const url5 = "http://-example.com";

if (urlRegex.test(url1)) {
  console.log(`${url1}  || is a valid URL.`);
} else {
    console.log(`${url1}  ||  is not a valid URL.`);
}

if (urlRegex.test(url2)) {
    console.log(`${url2}  ||  is a valid URL.`);
} else {
  console.log(`${url2}  ||  is not a valid URL.`);
}

if (urlRegex.test(url3)) {
  console.log(`${url3}  ||  is a valid URL.`);
} else {
  console.log(`${url3}  ||  is not a valid URL.`);
}

if (urlRegex.test(url4)) {
    console.log(`${url4} is a valid URL.`);
} else {
    console.log(`${url4} is not a valid URL.`);
}

if (urlRegex.test(url5)) {
  console.log(`${url5}  ||  is a valid URL.`);
} else {
    console.log(`${url5}  ||  is not a valid URL.`);
}


console.log("=========================================================")













































