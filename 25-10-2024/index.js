const URL = "https://cat-fact.herokuapp.com/facts";
let fact =document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getData = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    fact.innerText=data[1].text;
    console.log(data);
};

btn.addEventListener("click",getData);