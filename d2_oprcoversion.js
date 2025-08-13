//in this code i learn to add str and operation arithmetic and basic function syntax
/////////*******OPERATION******** *///////////
// const { userOne } = require("./userOne");


// let value = "3"
// let negvalue = -value
// console.log(negvalue);


// console.log(2+2);

// console.log(2-2);

// console.log(2*2);

// console.log(2**2);

// console.log(2/2);

// console.log(2%2);

// let str1 = "hello"

// let str2 ="Rishabh"

// let str3 = str1 + str2 // strig can add also 
// console.log(str3);


// console.log(1 + " 2");
// console.log(2 + " 1");
// console.log(2 + 3 + "2");

// console.log(+true);
// console.log(+ "");


// let num1,num2,num3 = 2 + 2
// num1 = num2 = num3 = 2 + 2


// let gamecounter = 100
// gamecounter++;
// console.log(gamecounter);
//------steak and heap 
let anothername = "Rani";
anothername = "mani";

console.log(anothername); // Output: mani

let userOne = {
    email: "user@yahoo.com",
    upi: "abc@ybl"
};

let userTwo = userOne; // Assigning by reference (not a copy)

userTwo.email = "rishabh@yahoo.com"; // This changes both userTwo and userOne's email

console.log(userOne.email);  // Output: rishabh@yahoo.com
console.log(userTwo.email);  // Output: rishabh@yahoo.com
