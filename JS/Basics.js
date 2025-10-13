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
//Map Reduce
const numbers = [1, 2, 3, 4, 5];
function square(num)
{
    return num*num;
}
const squaredNumbers = numbers.map(square);
console.log("Squared Numbers using Map: " + squaredNumbers);
const addnumers = numbers.map(num => num+10);
console.log("Add 10 to each element using Map: " + addnumers);
//Map Filter
const isOdd = (num) => (num % 2 != 0 )
console.log("Odd or Even using Map: " + numbers.filter(isOdd));
//Multipils of 3 using filter
const multipleof3 = (num) => (num % 3 == 0 )
console.log("Multiples of 3 using Filter: " + numbers.filter(multipleof3));
//Reduce
const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log("Sum of array elements using Reduce: " + numbers.reduce(sum));
//sum of even triple numbers using map,reduce and filter
const array = [1, 2, 3, 4, 5, 6];
const func=array
           .filter(num=> num%2==0)
           .map(num=> num*3)
           .reduce((acc,curr)=> acc+curr);
console.log("Sum of even triple numbers using map,reduce and filter: " + func);
//De construct the array
const myArray = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = myArray;
console.log("Rest of Element: " + rest);
//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined Array: " + combined);
//spread operator in objects
const obj11 = { a: 1, b: 2 };
const obj22 = { c: 3, b: 4 };
const combinedObj = { ...obj11, ...obj22 };
console.log("Combined Object: " + JSON.stringify(combinedObj));
//Promises
console.log("Promise Example:");
let promise=new Promise((resolve,reject)=>{
    const success=true;
    setTimeout(()=>{
    if(success)
        resolve("Resolved!");
    else
        reject("Rejected!");
    }),2000;
})
promise.then((result)=>{console.log(result)})
       .catch(reject=>{console.log(reject)})
       .finally(()=>{console.log("Promise is settled")});
//fetch example
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => data.map(user=>console.log(user.id)))
console.log("End of Promise Example");
//Async Await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
//String Literals
let name1="Pravin";
let age=19;
let message=`My name is ${name1} and Im ${age} years old.`;
console.log(message);
