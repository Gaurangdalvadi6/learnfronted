let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let par = document.querySelector("p");
console.log(par);

let classname = par.getAttribute("class");
console.log(classname);

par.setAttribute("class","gaurang");
console.log(par);

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }

// let heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " from Apna College students";

// heading.append("from Apna College students");

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h3");


// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     // console.log(this);
//     this.style.backgroundColor="blue";
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// })


// let p = document.querySelector("p");

// p.addEventListener("click",()=>{
//     console.log("clicked on paragraph")
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",()=>{
//     console.log("mouse inside div");
// });

// random color generator code
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerHTML=randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()*256);
//     let blue = Math.floor(Math.random()*256);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }



// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.addEventListener("dblclick", () => {
//     console.log("object");
//   });
// }

// for (btn of btns) {
//     btn.onclick=sayHello;
//     console.dir(btn);
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     };
// }

// function sayHello() {
//   alert("Hello!");
//   // console.log("Hello!");
// }

// function sayName() {
//   alert("Apna College!");
//   // console.log("Hello!");
// }
