//for loop
//array

//let cars=['i20','i10','swift','jaguar','audi',200,true,test()];  hetrogenous array >>> valid array

//function test(){
//return 20;
//}
//console.log(cars);


//homogenous array

let cars = ['i20', 'i10', 'swift', 'jaguar', 'audi'];
// length operator: will give length of array
console.log(cars.length);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);//undefined 


//for loop
//for(statement;condition;++/--)
//i++ => i=i+1
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// fr in loop on object
let student = {
    name: 'nitin',
    age: 20,
    mob: 4589653265
}

//obj: for in
for (let x in student) {
    console.log(student[x]);
}

// array:for,for of,forEach( array itteration method)
let numbers = [10, 20, 65, 55, 88, 889]
for (let num of numbers) {
    console.log(num);
}

let h = 10;
do {
    h++;
    console.log(h);
} while (h < 15)