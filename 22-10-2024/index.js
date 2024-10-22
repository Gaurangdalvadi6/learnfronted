let btn = document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";

document.querySelector("body").prepend(btn);

let para = document.querySelector("p");
para.classList.add("newClass");

// let newbtn = document.createElement("button");
// newbtn.innerText="click me!";
// let div = document.querySelector("div");
// div.after(newbtn);

// let par = document.querySelector("p");
// par.after(newbtn);
// par.remove();

// let div = document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.fontSize="20px";
// div.innerText="Hello";
// console.log(div);