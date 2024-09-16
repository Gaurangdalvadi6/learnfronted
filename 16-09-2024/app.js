document.querySelector("h1").innerHTML="Good Bye!!"




// function fibonacciGenerator(n) {
//     if (n<0) {
//         return [];
//     }
//     if (n===1) {
//         return [0];
//     }
//     if (n===2) {
//         return [0,1];
//     }

//     const fib=[0,1];
//     for (let i = 2; i < n; i++) {
//         fib[i]=fib[i-1]+fib[i-2];
//     }
//     return fib;

// }
// console.log(fibonacciGenerator(3));


// var output= [];
// var count=1;

// function FizzBuzz(){

//     for (let index = 1; index <=100; index++) {
        
//         if (count%3===0 && count %5===0) {
//             output.push("FizzBuzz");
//         }
//         else if (count%3===0) {
//             output.push("Fizz");
//         }
//         else if(count %5===0) {
//             output.push("Buzz");
//         }
//         else {
//             output.push(count)
//         }
//         count++;
//     }
//         console.log(output);
// }

// var output= [];
// var count=1;
// function FizzBuzz(){

//     while (count <=100) {
//         if (count%3===0 && count %5===0) {
//             output.push("FizzBuzz");
//         }
//         else if (count%3===0) {
//             output.push("Fizz");
//         }
//         else if(count %5===0) {
//             output.push("Buzz");
//         }
//         else {
//             output.push(count)
//         }
//         count++;
//     }
//         console.log(output);
// }


// function number(){
//     let result = [];
// for (let index = 1; index <=100; index++) {
//     var str="";
//     if (index%3===0 && index%5===0) {
//         str+="FizzBuzz";
//     }
//     else if (index%3===0) {
//         str+="Fizz";
//     }
//     else if (index%5===0) {
//         str+="Buzz";
//     }
//    else{
//     str=index;
//    } 
//    result.push(str);
// }
// return result;
// }

// console.log(number());


// var guestList = ["Gautam","Ashu","Harshil","Mithil","Soham","Vraj"];
// var guestName = prompt("Enter your name :");
// if (guestList.includes(guestName)) {
//     alert("Welcome, "+guestName);
// } else {
//     alert("Sorry , maybe next time...")
// } 
//console.log(guestList);
//console.log(guestList.length);

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Leap year.";
//       } else {
//         return "Not leap year.";
//       }
//     } else {
//       return "Leap year.";
//     }
//   } else {
//     return "Not leap year.";
//   }
// }
// console.log(isLeapYear(1989));


// function bmiCalculator(weight,height){
//     var bmi = weight/Math.pow(height,2);
//     var output;

//     if (bmi<18.5) {
//         output = "Your BMI is "+bmi.toFixed(0)+ ", so you are underweight."
//     }
//     else if(bmi>=18.5 && bmi<= 24.9) {
//         output= "Your BMI is " + bmi.toFixed(0) + ", so you have a normal weight.";
//     }else{
//         output= "Your BMI is " + bmi.toFixed(0) + ", so you are overweight.";
//     }
//     return output;
// }
// console.log(bmiCalculator(65,1.5));

// var name1= prompt("Enter name1 :");
// var name2 = prompt("Enter name2 :");
// var lovescore = Math.floor((Math.random()*100))+1;

// if (lovescore > 70) {
//     alert("Your love score is "+lovescore+"%"+" you love other like romeo and radhika.");
// }else if(lovescore>30 && lovescore <=70) {
//     alert("Your love score is "+lovescore+"%");
// }
// else{
//     alert("Your love score is "+lovescore+"%"+" you go together like oil and water.");
// }
