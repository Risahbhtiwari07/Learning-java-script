// if condition
// const isusserloggedin = true
// const tempratue = 41

// if(tempratue < 40 ){
// console.log("less than 50");
// }else{
//     console.log("temprature greater thn 50");
// }
// console.log("executed");


//basic operator
//3 ! = 2  --> is three 3 is not equal 3
//=== 
//<--lessthen , > greatertham ,>= greatertham equaltu, <= lessthen equaltu
//===  in this check datatype and value also
//!==   



// in this code about scopee in if condition
// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
    
// }
//console.log(`user power ${power}`);


// short hand notation 
 //const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");


// nested if condition
// if (balance < 500){
//     console.log("less than ");
// }else if ( balance < 750){
//     console.log("less than 750");
// }else if (balance < 900 ){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1200");
// }

// example 
const userloggedin = true
const debitcard = true 
const loggedinfromgoogle = false
const loggedinfromemail = true 

if (userloggedin && debitcard && 2==3){
    console.log("allow to buy course ");
    
}
if (loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}


//NULISH COALESCING OPERATOR (??): NULL UNDEFINED

let val1;
// val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 25
val1 = null ?? 10 ?? 20


console.log(val1);



//ternary operator 
// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more tahn 80");

