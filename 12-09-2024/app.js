let language = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(language);
language.reverse();
console.log(language);
console.log(language.indexOf("javascript"));

// let months = ["january","july","march","august"];
// console.log(months);
// months.splice(0,2,"june","july");
// console.log(months);

// sorting method is good for string type value and not good for numeric value
// because your numeric value first convert into to string and after change
// let num = [25,55,78,24,100];
// console.log(num.sort());


// splice changes effect original array
// let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];
// console.log(colors);
// console.log(colors.splice(4));
// console.log(colors);
// console.log(colors.splice(0,1));
// console.log(colors);
// console.log(colors.splice(0,0,'red'));
// console.log(colors);

// slice don't change original array
// if you want to see changes store in other variable
// let color = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];
// console.log(color.slice(2,6));
// console.log(color.slice(-2));

// concat method is used for concatination of array and it can't change original array
// reverse method is used for reverse the array and also change original array
// let primary = ["red","yellow","blue"];
// console.log(primary);
// let secondary = ["orange","green","violet"];
// console.log(secondary);
// let mix = primary.concat(secondary);
// console.log(mix);
// mix.reverse();
// console.log(mix);


// include use is find element if element found return true otherwise return false
// let primary = ["red","green","blue"];
// console.log(primary.includes("red"));

// indexOf use if element found give index number otherwise give -1
// let primary = ["red","green","blue"];
// console.log(primary.indexOf("blue"));

// shift & unshift use
// shift is used for remove element from start
// unshift is used for add element from start
// let month = ["january","july","march","august"];
// console.log(month);
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// let cars = ["audi","bmw","xuv","maruti"];
// console.log(cars);
// cars.unshift("skoda");
// console.log(cars);
// cars.shift();
// console.log(cars);

// push & pop use
// push is used for add elements at end
// pop is used for remove elements from end
// let bro = ["Gautam","Parth","Punit","Prathmesh"];
// console.log(bro);
// bro[0]="Gaurang";
// console.log(bro);
// bro.push("Pradeep");
// console.log(bro);
// bro.pop();
// console.log(bro);

// array length find use
// let arr = ["Java","Python",25,15.5];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1].length);

// let newArr = [];
// console.log(newArr);
// console.log(newArr.length);

// let Students = ["Gaurang","Punit","Parth"];
// console.log(Students);