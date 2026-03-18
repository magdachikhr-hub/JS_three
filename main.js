// let lesson = 7;
// let sentence = "-how many lessons do we have today? -we have - ";

// console.log(sentence + lesson);

// hello = "java";

// let arr = [1234, hello, sentence, lesson, "java", [], {}];

// let player = {
//   height: 1.7,
//   weight: 50,
//   origin: "mars",
// };

// let isAdult = false;
// let user = null;
// let item;

let email = "chikhradzemagda@itvet.com";
// console.log(email.indexOf("@"));
//let index email.indexOf("@");
//console.log(index);

//uppercase
console.log(email.toLocaleUpperCase());

let upperCaseMail = email.toLocaleUpperCase();

console.log(upperCaseMail);

//includes()
let containsGe = email.includes(".ge");
console.log(containsGe);

let containsCom = email.includes(".com");
console.log(containsCom);

let textOne = "i love javascript";
let containsDot = textOne.includes(".");
console.log(containsDot);

let containsSpace = textOne.includes(" ");
console.log(containsSpace);

//replace()
let textTwo = "helllooo i am magda i love coding";
console.log(textTwo.replace("helllooo", "hi"));
console.log(textTwo.replaceAll("i", "you"));

//trim()
let userName = "      madu       ";
console.log(userName.trim());
console.log(userName.trimEnd());
console.log(userName.trimStart());

//chaining

