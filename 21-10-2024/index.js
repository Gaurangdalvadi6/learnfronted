let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerHTML=randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;

    console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}



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
