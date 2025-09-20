//for loop 

// for (let i = 0; i <= 10;i++) {
//     const element = i; 
//     if (element == 5 ) {
//     //console.log("it is best number");
//     }  
//    console.log(element);

//}
// console.log(element);


// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//       //console.log(`innner loop value ${j} and inner loop ${i}`);
//     console.log(i + ' * ' + j + ' = '+ j*i );
    
//     }
// }



// in this array length is 

let myArray = ["superman", "flash", "batman"]
console.log(myArray.length);
for (let index = 0; index <= myArray.length; index++)
     {
    const element = myArray[index];
    //console.log(element);
}


//break and coninue
//break
// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break  
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

//continue
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue   
    }
    console.log(`value of i is ${index}`);
    
    
}

