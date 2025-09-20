const userEmail = []

if (userEmail) {
    console.log("got user email");
    
    
}else{
    console.log("dont have useremail");
    
}
//falshy value

// false , 0,-0,bigint 0n,"",null, undefined,NaN

//TRUTHY VALUE 
// "0",'fals'," ",[], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is an empty");
    
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("onject is EMPTY");
    
}