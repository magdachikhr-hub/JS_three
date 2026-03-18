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

//split()

let splitted = textTwo.split(" ");

// let splitted = textTwo.split(" ").toSpliced(3,3, "bye");
console.log(splitted);

//slice
let message = "hi, how are you?";

console.log(message.slice(0, 2)); //from where to where to cut
console.log(message.slice(4, 7));

//chaining

let myEmail = "magdaachikhradze@gmail.ge";

// let indexOfAt = myEmail.indexOf("@");

// console.log(myEmail.indexOf("@"));
// console.log(myEmail.slice(myEmail.indexOf("@") + 1));
// console.log(myEmail.slice(indexOfAt + 1));
// console.log(myEmail.indexOf("@") + 1);

let indexOfAt = myEmail.indexOf("@");
console.log(indexOfAt);
console.log(myEmail.slice(0, 16));
