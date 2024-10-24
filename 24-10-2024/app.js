function getData(dataId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// Async-await
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}


// ------------------------------------------
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("network error");
//     });
// }

// let promise = getPromise();
// promise.then((result) => {
//     console.log("promise fulfilled",result);
// }).catch((err) => {
//     console.log("promise rejected",err);
// });

// ----------------------------------------
// promise with example
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         },5000);
//     });
// }

// ------------------------
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("something wrong");
// });

// ------------------------------------------
// callback hell
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data ",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     });
// });
// ------------------------------------------------
// let DATA="secret information";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("data = ",DATA)
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value";
//     }
// }

// let student1 = new User("Gautam","gautam@gmail.com");
// let student2 = new User("Parth","parth@gmail.com");
// let teacher1 = new User("Ritika","ritika@gmail.com");
// let admin = new Admin("Admin","admin@gmail.com");
// -------------------------------------------------
// class Parent {
//     hello(){
//         console.log("this is a parent");
//     }
// }

// class Child extends Parent{}

// let obj= new Child();
// obj.hello();

// -----------------------------------------------------
// class ToyotaCar {
//     constructor(brand,milenge){
//         console.log("creating new object");
//         this.brand=brand;
//         this.milenge=milenge;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);

// --------------------------------------------------------
// const employee = {
//     calcTax1(){
//         console.log("tax rate is 10% ");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax1(){
//         console.log("tax rate is 20% ");
//     }
// };

// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;