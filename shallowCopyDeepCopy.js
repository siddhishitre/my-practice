

var color = ['red','blue','orange','white','black'];
var color2 = color; // colors and color2 array is pointing to the same memory location
console.log('color',color);
console.log('color2',color2);


//shallow copy : if we changing items from copied array the changes will reflect to the origional array as well
//let a = [10,20,30]
//a[1] = 60;
//console.log(a);

color2[2]='pink';
console.log('color2',color2);
console.log('color',color);

//Deep copy: origional array/ object item will not get affected if we change item of copied array /object

let car1 = ['swift','mini cup', 'audi','jaguar'];//memory location of car1 and car2 is different in deep copy
let car2 = [...car1]
console.log('car1',car1);
console.log('car2',car2);

car2[0]='siddhi';

console.log('car1',car1);
console.log('car2',car2);

//shallow copy  of object
let carDetails1 = {
    carName : "swift",
    color : "red",
    price : 800000,
    tpermite : true 
}
let carDetails2 = carDetails1;
console.log('carDetails1',carDetails1); 
console.log('carDetails2',carDetails2);

carDetails2.price = 900000;

console.log('carDetails1',carDetails1); 
console.log('carDetails2',carDetails2);


let carDetails3 = {
    carName : "swift",
    color : "red",
    price : 800000,
    tpermite : true 
}
//Deep copy of object : spread / json
let carDetails4 = {...carDetails3};
console.log('carDetails3',carDetails3); 
console.log('carDetails4',carDetails4);

carDetails4.color =  'white';
console.log('carDetails3',carDetails3); 
console.log('carDetails4',carDetails4);


//using jsonparse and stringfy

//json stringfy:
let student = '{"stdName" : "pooja","age":20}';//stringifyed json formate
let student2 = {name: 'pooja',age :20}//json parsed formate

//JSON: javascript data interchange formate
//when we transfering data  from frontend to backend
// or getting data from backend  to frontend it should be in jsin format

//JSON:
let emp = {
    empName : 'swaransh',
    empFriends: ['sanchit','pavan','ram','radha'],
    empCar : [
        {carName : 'audi',color:'pink'},
        {carName: 'audi',color:'red'},
        {carName: 'audi', color: 'white'}
    ],
    empaddress: {city:'mumbai',pinCode: 41020}
}

let carDetails5 = {
    carName : "swift",
    color : "red",
    price : 800000,
    tpermite : true 
}
let stringyFyed_obj = JSON.stringify(carDetails5);//socket API data  should go and come in stringify format
console.log('stringyFyed-obj',stringyFyed_obj);
console.log(stringyFyed_obj.carName);

let parsedData = JSON.parse(stringyFyed_obj);
console.log(parsedData);
console.log(parsedData.carName);


