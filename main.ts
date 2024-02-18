var prompt = require('prompt-sync')();

let x = parseInt(prompt('Please Enter your First Value: '));
let y = parseInt(prompt('Please Enter your Second Value: '));
let op = prompt('Please Enter Your Operator: ');

if(op === "+") {
    console.log(`${x + y}`);
}
if(op === "-") {
    console.log(`${x - y}`);
}
if(op === "*") {
    console.log(`${x * y}`);
}
if(op === "/") {
    console.log(`${x / y}`);
} else {
    console.log('Please Select Correct Value.');
}


export{};