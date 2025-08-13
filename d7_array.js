// in this we learn array 
// it is resizeable and mix data type
const myarr = [0, 1, 2, 3, 4, 5, 6]
const myheros = ["shaktiman", "nagraj"]


const myarr2 = new Array(1, 2, 3, 4) 
// console.log(myarr[1]);


//array methods

// myarr.push(6)//push methodd adds the array element
// myarr.push(8)
// myarr.pop()
// myarr.unshift(9)//in this add in startpoint in array
// myarr.shift()//remove the start point 
// console.log(myarr.includes(8));  i t check the que include or not 
// console.log(myarr.indexOf(5));//index count
// const newArr = myarr.join()
// console.log(typeof newArr);
// console.log(myarr);



//slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(1, 3)
console.log(myn1);

console.log("B", myarr);

const myn2 = myarr.splice(1, 3)
console.log(myn2);
console.log("C", myarr);
console.log();
