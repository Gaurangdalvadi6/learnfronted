let name1 = "ApnaCollege";
console.log("silce "+name1.slice(4,9));
console.log("indexof "+name1.indexOf("na"));
console.log("replace " +name1.replace("Apna","Our"));
console.log(name1.slice(4));
let newName=name1.slice(4).replace('l','t');
console.log(newName);
console.log(newName.replace('l','t'));

// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let msg = "ILoveCoding";
// let newMsg=msg.replace("Love","do");
// console.log(newMsg);

// let message = "ILoveIndia";
// console.log(message.indexOf("a"));

// function capitalizeWords(str) {
//     return str.split(' ').map(word => {
//         // Capitalize the first letter and add the rest of the word in lowercase
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }

// let names = "gaurang dalvadi amdavad";
// let capitalizedNames = capitalizeWords(names);

// console.log(capitalizedNames);


// let names = "gaurang dalvadi";
// let firstLetterUpperCase = names.charAt(0).toUpperCase()+names.slice(1,names.length);
// console.log(firstLetterUpperCase);
// console.log(names.toUpperCase());




// let password = prompt("Enter the password");
// let newPassword =password.trim();
// console.log(newPassword);

// let num1 = 33;
// let num2= 12563;

// if ((num1%10)===(num2%10)) {
//     console.log("Last Digit is :"+num1%10);
// }else{
//     console.log("Not Same");
// }


// let num1 = 10;
// let num2 = 5;
// let num3 = 2;

// if (num1 > num2 && num1>num3) {
//     console.log("num1 is largest");
// }else if(num2>num1 && num2>num3) {
//     console.log("num2 is largest");
// }else{
//     console.log("num3 is largest");
// }

// let str = "pineapple";
// if ((str[0]=='A' || str[0]=='a') && str.length>5) {
//     console.log("Golden String");
// }else{
//     console.log("Not");
// }

// let quarter="Quarter4";
// switch (quarter) {
//     case "Quarter1":
//         console.log("January,February,March");
//         break;
//     case "Quarter2":
//         console.log("April,May,June");
//         break;
//     case "Quarter3":
//         console.log("July,August,September");
//         break;
//     case "Quarter4":
//         console.log("October,November,December");
//         break;

//     default:
//         console.log("Enter valid Input");
//         break;
// }

// let userName = prompt("Enter User Name: ");
// let age = prompt("Enter Your age: ");
// let output = `${userName} is ${age} years old`;
// alert(output);

// let num = 250;
// if (num%10==0) {
//     console.log("Good");
// }else{
//     console.log("Bad");
// }

// let firstName=prompt("Enter first name : ");
// let lastName=prompt("Enter last name : ");
// let msg="Welcome "+firstName+" "+lastName;
// alert(msg);

// alert("Something is Wrong!");
// console.log("This is simple message");
// console.error("This is error message");
// console.warn("This is warning message");

// let day=7;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Please Enter valid day");
//         break;
// }

// let name1 = "apple";
// if ((name1.charAt(0)==='a') && (name1.length>3)) {
//     console.log("Good String");
// }else{
//     console.log("Bad String");
// }



// let firstName="Gaurang";
// let lastName="Dalvadi"
// if (firstName == "Gaurang") {
//     console.log(`Welcome ${firstName+" " +lastName}`);
// }



// console.log("before if statement");
// let age = 23;
// if (age>=18) {
//     console.log("you can vote");
// }
// console.log("after if statement");