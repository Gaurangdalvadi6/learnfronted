const Person = {
    name : "parth",
    age : 15,
    city : "ahmedabad"
}
Person.city="New York";
Person.country = "United states";
console.log(Person);

// generate random from 1 to user given range

// let usernumber = prompt("Enter any number");
// let num = Math.floor(Math.random()*usernumber)+1;
// let guess = prompt("guess the number");

// while (true) {
//     if (guess=="quit") {
//         console.log("user quit");
//         break;
//     }

//     if (guess == num) {
//         console.log("u r right! & your number is : "+num);
//         break;
//     }
//     else if(guess<num) {
//         guess = prompt("guess number to small, please try again later!");
//     }
//     else{
//         guess = prompt("guess number to large, please try again later!");
//     }
// }
// console.log(num);

// generate number from 1 to 100
// let num = Math.floor(Math.random()*5)+1;
// console.log(num);


// generate number from 1 to 100
// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// const student = [
//   {
//     name: "gaurang",
//     age: 24,
//   },
//   {
//     name: "gautam",
//     age: 24,
//   },
//   {
//     name: "parth",
//     age: 23,
//   },
// ];

// const post ={
//     username : "@mr_rambo_king",
//     content : "This is the 10th post of my",
//     likes : 150,
//     reposts : 5,
//     tags : ["#apnaCollege","#XDuce"]
// }

// const student = {
//     name : "gaurang",
//     age : 24,
//     marks : 70,
//     city : "ahmedabad"
// }

// student.name="gautam";
// let arr = [2,5,10,4,22,7,1,9];
// let largest = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (largest<arr[i]) {
//         largest=arr[i];
//     }
// }

// console.log(largest);

// let n=5;
// let fact=1;

// for (let i = 1; i<=n; i++) {
//     fact=fact*i;
// }
// console.log(`factorial of ${n} is ${fact}`);

// let number= 287152;
// let sum = 0;
// let remainder;

// while (number>0) {
//     remainder = number%10;
//     sum = sum+remainder;
//     number=Math.floor(number/10);
// }

// console.log(sum);

// let number = 287152;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//     count++;
//     copy= Math.floor(copy/10);
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
