// Primitive Types
let a=10;
let b=a;
a=20;
console.log(b); //10
// Primitive vs Reference Types
let obbj1={age:19};
let obj2=obbj1;
obbj1.age=20;
console.log(obj2.age); //20
//comparison operators
console.log(10==10); //true
console.log(10=='10');
console.log(10==='10')//false
let p=true
let q=false
if(p && q){
    console.log("both are true");
}
//Bitwise Operators
console.log("Bitwise AND: " + (5 & 3));
console.log("Bitwise not: " + (~5));
console.log("Bitwise OR: " + (5 | 3));
console.log("Bitwise XOR: " + (5 ^ 3));
console.log("Left Shift: " + (5 << 1));
console.log("Right Shift: " + (5 >> 1));
console.log("Unsigned Right Shift: " + (128 >>> 1));
//functions
function add(x,y){
    return x+y;
}
console.log("Function Add: " + add(5,3));
function subtract(x,y){
    console.log("Function Subtract: " + (x-y));
}
subtract(5,3);
//Arrow Functions
const multiply=(x,y)=>{
    console.log("Arrow Function Multiply: " + (x*y));
}
multiply(5,3);
const addArrow=(x,y)=> x+y;
console.log("Arrow Function Add: " + addArrow(5,3));