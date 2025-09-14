// in this we study about literals object
// symbol method and access symbol datatype 

// how to access Element of object and update also how to freeze 
// in this function by object and greeting 


//singleton 

//object literals 
// key value pairs is object 

const mysym = Symbol("key1")


const jsuser ={
    name : "Rishabh",
    "full name":"Rishabh Tiwari",
    age: 18,
    [mysym]:"mykey1",
    location :" Deoria",
    isloggedin:false, 
    email: "rishabh123@gmail.com",
    lastloginday:["monday", "saturday"]
}
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log( jsuser[mysym]);


// for updating obect

jsuser.email = "rishabh@568523.com"

// for freezing all value 

// Object.freeze(jsuser)
jsuser.name = "Rudra"
// console.log(jsuser);


jsuser.greeting = function(){
    console.log("hellow js user");
    
}


jsuser.greetingtwo = function(){
    console.log(`hellow js user, ${this.name}`);    
} 
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());