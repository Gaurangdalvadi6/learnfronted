const object = {
    message : 'Hello, World',
    
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);

// const isEven = (n)=> {
//     if (n%2==0) {
//         return "even";
//     }else{
//         return "odd";
//     }
// }

// let arr = [23,26,13,86,88];
// let sum =0;
// const arrayAverage = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         sum=sum+arr[i];
//     }
//     return sum/arr.length;
// }

// create function to print hello world 5 times

// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval");
// }, 10000);

// arrow function to return square of the n
// const square = (n)=>{
//     return n*n;
// }
// console.log(square(25));

// const student = {
//     name: "Harsh",
//     marks: 80,
//     prop : this, // global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getmarks: ()=>{
//         console.log(this);  // parent's scope -> window
//         return this.marks;
//     }
// }

// console.log("Hi there");
// let id =setInterval(() => {
//     console.log("JS");
// }, 2000);
// console.log(id);

// let id2 =setInterval(() => {
//     console.log("Hello World");
// }, 3000);
// console.log(id2);

// use of setTimeout
// console.log("Hi there");
// const n = 5;
// setTimeout(() => {
//         console.log("Hello JS");
// }, 4000);
// console.log("Welcome to");
