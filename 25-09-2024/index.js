let arr = [2,5,10,4,22,7,1,9];
let largest = 0;

for (let i = 0; i < arr.length; i++) {
    if (largest<arr[i]) {
        largest=arr[i];
    }
}

console.log(largest);

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
