let random = function(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}

console.log(random(100,500));

// let str = "apna ghar apni pahechan";
// let count =0;

// function countVowel(str){
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i)=='a'|| str.charAt(i)=='e'|| str.charAt(i)=='i'|| str.charAt(i)=='o'|| str.charAt(i)=='u') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowel(str));

// let country = ["Germany","Austalia" , "United state of america"];

// function largestCountryName(country) {
//   let largestIndex = 0;
//   for (let i = 0; i < country.length; i++) {
//     let currNameLength = country[i].length;
//     let largestLength = country[largestIndex].length;
//     if (largestLength < currNameLength) {
//       largestIndex = i;
//     }
//   }
//   return country[largestIndex];
// }

// console.log(largestCountryName(country));

// Write a JavaScript function to extract unique character from a string
// let str = "abcdabcdefggghjkl";

// function getUnique(str){
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar)==-1) {
//             ans = ans+currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));

// Write a JavaScript function that returns array elements larger than a number.
// let arr = [8,9,10,1,2,5,7];
// let num = 5;

// function larger(arr,num){
//     for (let i = 0; i <arr.length; i++) {
//         if (arr[i]>num) {
//             console.log(arr[i]);
//         }
//     }
// }

// larger(arr,num);

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };

// function OddOrEvenFactory(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong input");
//   }
// }

// function multiple(func,count){
//     for (let i = 1; i <= count; i++) {
//         func();
//     }
// }

// let Greet = function(){
//     console.log("Hello");
// }
// multiple(Greet,10);

// function expressions
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,999));

// let str = ["hi","hello","bye","!"];

// function concat(str){
//     let result="";
//     for (let i = 0; i <str.length; i++) {
//         result=result+str[i];
//     }
//     return result;
// }
// console.log(concat(str));
