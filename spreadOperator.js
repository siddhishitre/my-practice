//Javascript spread operator(...)
// The Javascript spread operator(...) allows us to quickly copy all
 // or part of an existing array or object  into another array or object.
let no =[10,20,30,60,30,55,44];
let no1 = [...no];
console.log(no1);

//part copy
let no2 = [10, 20, 30, 60, 30, 55, 44];
let [a, b, c, ...d] = no2;
console.log('a',a);
console.log('b',b);
console.log('c',c);
console.log('d',d);

//spread operator on obj :
let carDetails = {
    carName : "swift",
    color : "red",
    price : 800000,
    tpermite : true ,
    dis : 10000
}
let carDetails3 = {
    carName : "mi",
    color : "red",
    price : 900000,
    tpermite : false,
    discount:20000
}
let carDetails2 = {...carDetails};
console.log(carDetails2);

let car4 = {...carDetails,...carDetails3}
console.log(car4);



word = 'MAHARASHTRA Mumbai';
originalWord = word.toLowerCase(); // maharastra mumbai
console.log('originalWord', originalWord);
finalString = '';
for(let i = 0;i<this.originalWord.length;i++){
    const char = originalWord[i];
    if(!finalString.includes(char)){
    finalString += char; //x+=4 => x=x+4; FS=""+m FS=>m ; 2nd : Fs = FS(m)+ a=>ma
    }
}
console.log('finalString',finalString);


function addition(a,b,sub){
console.log(a,b,sub);

}
function substraction(){
    10
}
console.log(addition(10,20,substraction));//callback fun

function add4(add1,add2){
    return(add1+add2);

}
console.log(add4())

let emp = [
    {name : 'siddhi',age:80},
    
    {name : 'pooja',age:30},
    
    {name  :'om',age:30},
    
    {name : 'jay',age:30},
    [40,20,[80,800,8000,[9,99,6]]]
]
console.log(emp);
console.log(emp[0].name);
console.log(emp[3].name);
console.log(emp[4][2][3][0]);



