let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",(e)=>{
    console.log("button was clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

// btn1.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     // console.log("button was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = (e)=>{
//     console.log("mouse inside a div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }

// let btn = document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector("body").prepend(btn);

// let para = document.querySelector("p");
// para.classList.add("newClass");

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