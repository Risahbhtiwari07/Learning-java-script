//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){
    //named iife
    console.log(`db connected`);
    
})();



//unnamed iife
( (name) => {
    console.log(`db connected two ${name} `);
} )("rishabh")///