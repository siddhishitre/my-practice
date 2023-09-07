//foreach
let cars = ['i10','i20','swift','jagwar','audi']
let newCars = [];
for(let i = 0;i<cars.length;i++){  //cars.length =>5
    newCars.push(cars[i])
}
console.log('newCars',newCars);


let newCars1 = []
cars.forEach(ele =>{
    newCars1.push(ele)
})
console.log('newCars',newCars1);


//spread operator(.....) allows us to quickly copy all or part of an existing array or object into another array or object
let newCar2 = [...cars];
console.log('newCars',newCar2);

//map
let employee = [
{name: 'swaransh', age: 30},
    {name: 'jay', age: 30},
    {name: 'om', age: 30},
    {name: 'ram', age: 30},

]

 let employeeNames = employee.map(employeeData =>{
      return employeeData.name;
} )

//let employeeNames =[]
 //employee.map(employeeData =>{
   // employee.push(employeeData.name);
 //})
    console.log('employeeNames',employeeNames);

    //function syntax:function funName(){//code block}

    function test() {
    //code block
    //map
    let employee = [
        { name: 'swaransh', age: 30 },
        { name: 'jay', age: 30 },
        { name: 'om', age: 30 },
        { name: 'ram', age: 30 },

    ]

    let employeeNames = employee.map(employeeData => {
        return employeeData.name;
    })

    //let employeeNames =[]
    //employee.map(employeeData =>{
    // employee.push(employeeData.name);
    //})
    console.log('employeeNames', employeeNames);



}
 function cascading(){
    console.log('cascading calling....');
    test();

 }
 function addition(){
    let result  = 30 + 60;
    console.log(result); //90
 }
  let result1=function addition(){
    return 30+60; //return will return value
    console.log('swaransh'); //unreachable code block
 }
 function substraction(a,b){ //a,b parameteres/argument parameterised funs
return a-b;

 }
 let res=substraction(150,90);

//normal fun
//let result3 = function multi(){
  //  return 90;
//}

//let result3 = function (){
   // return 90;

//}

//let result3 = ()=>{
   //}
let result3 = ()=>90;
console.log(result3);

let num = [10,20,30,50,6,999]
let num3 = [];
num.forEach(item=>{
    if(item !=50){
        num3.push(item)
    }
})
console.log(num3);

//shallow copy :spread operator
let a1 = ['a','ab','hh'];
let b1 = [...a1];
console.log('b1',b1);
b1[2]='siddhi'; //['a','siddhi','hh']
console.log('b1',b1);
console.log('a1',a1);

// filter array itteration method
let no = [10,50,100,22,20,4,40,60];
 var itemGreater = no.filter(item=>{
return item>20;
})
console.log(itemGreater,'itemGreater');
