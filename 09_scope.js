//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rishabh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

     two()

}

//one()

if (true) {
    const username = "rishabh"
    if (username === "rishabh") {
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++

//in this we declare direct function 
console.log(addone(5))

function addone(num){
    return num + 1
}

//in this we declare direct function but in vriable it was store 
addTwo(5)

const addTwo = function(num){
    return num + 2
}
