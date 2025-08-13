 //in this we learn date and time in js 


 let mydate = new Date()
//  console.log(mydate.toDateString());//op Wed Aug 13 2025

//  console.log(mydate.toJSON());
//  console.log(mydate.toISOString());
 
//  console.log(typeof mydate);// date is object
  
//  let mycretedate = new Date(2025, 0, 23)// in this we make itself date 
//  let mycreteddate = new Date(2025, 0, 23, 5, 3) //in this time also can make 
// console.log(mycreteddate.toLocaleString());
// let mycretedt = new Date("2025-02-14")//yy-mm-dd
// console.log(mycretedt.toLocaleString());
  let mycretedate = new Date("01-14-2023")
//  console.log(mycretedate.toLocaleString());
 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycretedate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());


newDate.toLocaleString('defaul',{
    weekday:"long"
})

