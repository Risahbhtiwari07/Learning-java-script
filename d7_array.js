// in this we learn array 
// it is resizeable and mix data type
const myarr = [0, 1, 2, 3, 4, 5, 6]
const myheros = ["shaktiman", "nagraj"]


const myarr2 = new Array(1, 2, 3, 4) 
// console.log(myarr[1]);




console.log("A", myarr);

const myn1 = myarr.pop(1, 3)
console.log(myn1);

console.log("B", myarr);

const myn2 = myarr.splice(1, 3)
console.log(myn2);
console.log("C", myarr);
console.log();

// array

// push():      its used to insert element in the last on the array
// pop():       its used to remove last element in the array.
// unshift():   its used to insert elemnet in the starting on the array.
// shift():     its used to remove first element in the array

// includes():  its used to check passed argument are have array or not.
// indexOf():   its used to know the indexOf of passed argument.
// join():      its used to get parent array element and convert it intothe string.
// slice():     its used to return part of array slice(startFrom, endTo) and endTo not include.
// splice():    its used to slice array, its include start and or point and remove that part in the array.
// push():      when we push an array in push() method then, its push array as an element.
// concat():    its used to make new array with caller and passed array elements.
// spread:      its used to spraed all element of array.
// let car = ['Alto', 'Baleno', 'Creta', 'Ertiga', 'Indigo'];
// let supercar = ['Supra', 'Prsche', 'Maclaren'];
// let mxicar = [...car, ...supercar];
// console.log(mxicar);

// flat():      its used to return element of all array and sub-array.
// let myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, [10, 11], 12], 13], 15];
// myArr = myArr.flat(Infinity);
// console.log(myArr);

// isArray():   its used to check passed argument is array or not and its return boolean value.
// from():      its used to make passed argument in array;
// of():        its return new array of passed element.