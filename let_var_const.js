//diff bet let,var,const

//scope difference :
//function scope and block scope
function learningLetVarConstDifference(){
var a= 10;
let b= 40;
if(a>2){
    let c= 50; //can not access a variable with let keyword outside block
                 // let keyword has block level scope
                 //var keyword has function level scope

    var d= 90;
    let res = a+20;
    console.log(res);
console.log(b);
console.log(c);//50
console.log(d);
}
//console.log(c);
//console.log(d);  // uncougth promises error

}
learningLetVarConstDifference();

//hoisting:  define value to the variable first and then declare it
function test(){
    //let name = 'siddhi'; //D+D
    let name; //declaration
    name = 'siddhi';  //defination

    surname = 'shitre';//defination
    //let surname; //declaration with let hosting not possible
    //console.log(name,surname);
    city = 'mumbai';
    var city;
    console.log(city);// hosting is possible with vr keyword

    city2 = 'pune';
    //const city2; //with const keyword hoisting is not possible


}
test();

reAssignment()
function reAssignment(){
    let name = 'siddhi';  //reasignning value to the variable is possible with let keyword
    name = 'swaransh';
    console.log(name);

    var surname = 'shitre';
    surname ='supekar';
    surname = 'fghjjk';
    console.log(surname); //reasignning value to the variable is possible with var keyword

    const middleName = 'om';
    //middleName = 'jay';
   // console.log(middleName);
}
//redeclaration of variable

reDeclaration();

function reDeclaration(){
    let city = 'pune'; //redeclaration is not possible with variable having let keyword
    //let city = 'mopj';
    var num = 9000;
    var num = 8000000; // redeclaration of variable having var keyword is possible
    console.log(num);

}
