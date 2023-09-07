let num = 20+30;
console.log(num);

let sub = 20-30;
console.log(sub);

let multi = 20*30;
console.log(multi);

let divid = 20/30;
console.log(divid);

let a=20;
console.log("value of ++a",++a);//preincrement: it will add first and then return it
console.log("value of a",a)

let b=20;
console.log("value of b++",b++);//postincrement: it willreturn value first and then get increment by one
console.log("value of b",b);

let x=10;
console.log("value of --x",--x);//predecrement: it will minus first and then return it
console.log("value of x",x)

let y=10;
console.log("value of y--",y--);//postdecrement: it will return value first and then get decrement by one
console.log("value of y",y);

//assignmentc operator
let r = 20; //assignment operator

let v = 60;//+= addition assignment oprator
//v = v + 90;
v+=90
console.log(v);

let p = 90;
let q = 10;
p-=q //90-10 ,p=80
console.log(p);


//differents between =,==,===
//comparision operator
//== : equlity operator >>  check only one value

let k=60;
let j=40;
console.log(k==j);

//=== : equlity operator >>check value + data type

let u = 10;
let w = '10';
console.log(u==w);//only check value so true

let d=10;
let f='10';
console.log(d===f);// check value +data type so false

console.log('>',k>j);// greater thean >
console.log('<',k<j);// less than <

console.log('!=', u != w); 
console.log('!==',u !== w);
console.log('>=',j>=k);
console.log('<=',j<=k);

//ternory operator ::: condition ? true : false;

let z=100;
z > 200 ?
console.log("z is greater") : console.log("z is smaller");

let text1="A" //65
let text2="B" //66
let reult= text1 < text2;
console.log(reult);

//logical operator &&,||,!
let r1=90;
let r2=50;

console.log(r1>r2 && r2<r1); //90>50 && 50<90 ->>> true && true ->>> true

console.log(r1>r2 || r2<r1); //90>50 ||50<90 ->>> true || true ->>> true
let m=true;
console.log('!->>',!m);
