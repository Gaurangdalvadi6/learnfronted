
let input = document.createElement("input");
let button = document.createElement("button");
button.innerHTML="Click Me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn= document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1");

let p1 = document.createElement("p");
p1.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p1);

// 1.
// let para1 = document.createElement("p");
// para1.innerText = "Hey I am Rambo";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// 2.
// let h3 = document.createElement("h3");
// h3.innerText="I'm a blue h3!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// 3.
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p2 = document.createElement("p");
// h1.innerText="I'm in a div";
// p2.innerHTML="ME TOO!";
// document.querySelector("body").prepend(div);

// div.append(h1);
// div.append(p2);

// div.classList.add("box");