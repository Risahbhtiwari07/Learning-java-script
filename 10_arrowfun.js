//this is here for current context , current object
const user ={
    username: "Rishabh",
    price : 999,
//here we have make function inside a object
    welcomeMessage: function(){
        // console.log(`${this.username} welcome to our website`);
        // console.log(this);

    }


}
 user.welcomeMessage()
// user.username ="rudra"// it is temprarry name i have given 
// user.welcomeMessage()
//console.log(this);


//here this keyword direct not use in function 

// function chai(){
//     let username = "rishabh"
//     console.log(this.username);
// }

// chai()


//here also not acces by variable 
// const chai = function () {
//      let username = "rishabh"
//      console.log(this.username);
// }
// chai()

//arrrow function

//here also no access by arrow
// const chai = () => {
//      let username = "rishabh"
//      console.log(this.username);
// }
// chai()


//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "rishabh"})


console.log(addTwo(3, 4))






