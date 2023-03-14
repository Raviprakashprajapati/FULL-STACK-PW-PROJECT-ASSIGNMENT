console.log("=================================================")
const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const url1 = "https://www.linkedin.com/in/janedoe123";
const url2 = "http://www.linkedin.com/in/janedoe123";
const url3 = "https://www.linkedin.com/in/janedoe_123";
const url4 = "https://www.linkedin.com/in/jane.doe123";
const url5 = "https://www.linkedin.com/in/jane-doe1234";

if (urlRegex.test(url1)) {
  console.log(`${url1} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url1} is not a valid LinkedIn profile URL.`);
}

if (urlRegex.test(url2)) {
  console.log(`${url2} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url2} is not a valid LinkedIn profile URL.`);
}

if (urlRegex.test(url3)) {
    console.log(`${url3} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url3} is not a valid LinkedIn profile URL.`);
}

if (urlRegex.test(url4)) {
  console.log(`${url4} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url4} is not a valid LinkedIn profile URL.`);
}

if (urlRegex.test(url5)) {
  console.log(`${url5} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url5} is not a valid LinkedIn profile URL.`);
}

console.log("=================================================")