//length property

let no = [10,20,90,66,336]
console.log(no.length);
 

// toString()
let stringesNo = no.toString();
console.log(stringesNo);

//pop()        (always delet last item)   
const fruits =  ["banana", "orange","apple","mango"];
let fruit2=fruits.pop();  // mango return removed item
console.log(fruits);
console.log(fruit2); // 

//push()
const fruits1 =  ["banana", "orange","apple","mango"];
console.log(fruits1.push("kivi")); // 5 new length
console.log(fruits1);

//shift()  (always delete first item)
const fruits2 =  ["banana", "orange","apple","mango"];
let shiftedItem=fruits2.shift() // banana return removed item
console.log(shiftedItem);
console.log(fruits2);


//unshift()
const fruits3 =  ["banana", "orange","apple","mango"];
fruits3.unshift('stt','siddhi');
console.log(fruits3);

// to delete item => pop,shift,delete - operator : deleted item creates undefined hole in origine array
//so length will remains same with delete operator

 const fruits4 = ["banana", "orange","apple","mango"];
 let indexOfapple = fruits4.indexOf('apple');
 console.log(indexOfapple);
  
delete fruits4 [indexOfapple];
console.log(fruits4);

// concat()
let fruits5 =  ["banana", "orange","apple","mango"];
fruits6=['.....apple','....mango'];
let fruits7 = fruits5.concat(fruits6);
console.log(fruits7);

//join()
let fruits8 = [4,4,1992];
 let date = fruits8.join('-').toString();
 console.log(date);


 //slice()
 let n = [10,20,8,3,6,6,56]
 console.log(n.slice(3,6));

//splice()
let fruit0 =  ["banana", "orange","apple","mango"];
fruit0.splice(1,2,'siddhi') //first para>>hoe many elements wants to add ,
// sec para>> how many ele u want to remove, 3rd >>items to be added
console.log(fruit0);


//without using sort or reverse method convert array into descending order

let test = ["banana", "orange","apple","mango"];
let revArray = test.sort().reverse();
console.log(revArray);








