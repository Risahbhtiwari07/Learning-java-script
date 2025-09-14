//const tinderUser = new Object() // it is singleton object 

const tinderUser = {}// it is non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "rishbah"
tinderUser.isloggedin = false

// console.log(tinderUser);
const regularuser = {
    email: "rishabh25@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rishabh",
            lastname: "Tiwari "
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);

// here i create two obj two concat in object by using Object.assign
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    4: "e",
    5: "f"
}

//const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({},obj1, obj2, obj4)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);



const users = [
    {
        id:1,
        email: "r@gmail.com"
    },
    {
        class: "9th",
        erollno:"2404030100852"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedin'));


const course = {
    coursename:"js in hindi",
    price: " 999",
    courseinstructor:"Rishabh"
}

//course.courseinstructor

const {courseinstructor: instructor} = course

//console.log(courseinstructor);
console.log(instructor);

