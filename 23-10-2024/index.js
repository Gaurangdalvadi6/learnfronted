let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click",()=>{
    if (currMode==="light") {
        currMode="dark";
        body.classList.remove("white");
        body.classList.add("dark");
    }else{
        currMode="light";
        body.classList.remove("dark");
        body.classList.add("white");
    }

    console.log(currMode);
});

// modebtn.addEventListener("mouseover",()=>{
//     if (currMode==="light") {
//         currMode="dark";
//         body.classList.remove("white");
//         body.classList.add("dark");
//     }else{
//         currMode="light";
//         body.classList.remove("dark");
//         body.classList.add("white");
//     }

//     console.log(currMode);
// });

// modebtn.addEventListener("mouseleave",()=>{
//     if (currMode==="light") {
//         currMode="dark";
//         body.classList.remove("white");
//         body.classList.add("dark");
//     }else{
//         currMode="light";
//         body.classList.remove("dark");
//         body.classList.add("white");
//     }

//     console.log(currMode);
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked - handler1");
// });

// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked - handler2");
// });

// let handler3 = (evt)=>{
//     console.log("button was clicked - handler3");
// };

// btn.addEventListener("click",handler3);

// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked - handler4");
// });

// btn.removeEventListener("click",handler3);