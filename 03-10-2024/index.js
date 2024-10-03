const mergeObjects= (args1,args2)=>({
    ...args1,...args2
});

console.log(mergeObjects({a:1,b:2},{c:4,d:8}));

// return args and second double the other args value
// const doubleAndReturnArgs = (arr,...args)=>[
//     ...arr,
//     ...args.map((e)=>e*2)
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,5));



// to capital array all element
// let str=["harsh","parth","sunil","devanshu","vibhu","chirag"];
// let newStr=str.map((e)=>{
//     return e.toUpperCase();
// });
// console.log(newStr);

// add 5 in array
// let arr=[3,4,5,6];

// let newArr=arr.map((e)=>{
//     return e+5;
// })

// console.log(newArr);


// sum of array using reduce
// find the average
// let arr = [2,3,4,5,7,25,65,100];

// let sum =arr.reduce((sum,e)=>{
//     return sum+e;
// });
// let average = sum/arr.length;
// console.log(sum);
// console.log(average);

// find the min of any given arguments
// function min(...args){
//     return args.reduce((min,el)=>{
//         if (min>el) {
//             return el;
//         }else{
//             return min;
//         }
//     })
// };

// spead use in object literals 
// const data = {
//     "email":"bhaiabhai@gmail.com",
//     "password":"abcd"
// };

// const dataCopy = {...data,id:234,country:"india"};


// spead use
// let arr = [1,2,3,4,5];
// console.log(...arr);

// let chars=[..."hello"];
// console.log(chars);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...even,...odd];
// console.log(nums);

// create a function to find the min number in an array
// let nums = [15,5, 10, 450, 50, 110, 90, 125];

// function getMin(nums) {
//   let min = nums.reduce((min, e) => {
//     if (min < e) {
//       return min;
//     } else {
//       return e;
//     }
//   });
//   return min;
// }
// console.log(getMin(nums));

// check if all numbers in our array are multiple of 10 or not
// let arr =[10,450,50,110,90,125];

// let output =arr.every((e)=>{
//     return e%10==0;
// });
// console.log(output);

// reduce example
// let num =[1,2,3,4];

// let final= num.reduce((res,el)=>{
//     return res+el;
// });
// console.log(final);

// map example
// let num = [1,2,3,4,5];
// let double = num.map((e)=> {
//     return e*2;
// });

// filter example
// let number = [2,5,8,10,4,11,56,876543,54362];
// let even = number.filter((e)=>{
//     return e%2==0;
// });

// let odd = number.filter((e)=>{
//     return e%2!=0;
// });

// console.log(double);
// console.log(even);
// console.log(odd);

// let arr = [1,2,3,4,5];
// const print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach((e)=>{
//     console.log(e);
// })

// for (const print of arr) {
//     console.log(print);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let i=0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }
