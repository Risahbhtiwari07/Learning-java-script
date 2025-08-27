const name = "Rishabh_Tiwari"
const repo = 50
console.log(name + repo + " value ");
console.log(`My Name is ${name} and my repo count is ${repo}`);//` it is standlon


const gameName = new String('Rishabh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);//prototype tells


console.log(gameName.length);//length known of string
console.log(gameName.toUpperCase());//upercase 
console.log(gameName.charAt(2));//char position by no.
console.log(gameName.indexOf('i'));//charater position by char 

//create new string 
const newString = gameName.substring(1, 5)
console.log(newString);//substring do no. range to output their character 

//another string

const anotherString = gameName.slice(-5,4)// it can take negativ value from there char 

console.log(anotherString);//
 
const newStringOne = "    Rishabh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim do space remove in string by using this 

const url = "https://rishabh.com/rishabh%20tiwari"//
console.log(url.replace('%20' , '-'))
console.log(url.includes(' Rishabh '));
console.log();
console.log(gameName.split('_'));
