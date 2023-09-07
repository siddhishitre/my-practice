//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object




var name = 'swaransh';
console.log(name);
let amount=10000;
console.log(amount);
let amt=105.232;
amount=5000;
console.log(amount);

let passed= true;
console.log(passed);

let xyz= 'true';
console.log(xyz);

//typeof operator : defines type of data

console.log(typeof(passed));
console.log(typeof(xyz));
console.log(typeof(amount));

//undefined 
let jk;
console.log(jk);
console.log(typeof(jk));

//null data : data type of null : object
let cash =null;
console.log(cash);
console.log(typeof(cash));

//object
//empty obj
//let studentdata = {}
let studentData = {
    studentname : 'om',
    age : 15,
    contanct : 9049853831,
    city : 'pune'
}

    console.log(studentData);
    console.log(typeof(studentData));
    
    //empty array
    //let list = []
    let list = ['i10','volvo','swift','audi'];
    console.log(list);
    console.log(typeof(list));

    let h=10.0;
    let l=h.toString();
    console.log("boolian value",l);
    console.log("boolian value",typeof(l));

    let savingAmount=BigInt("9999999999999999");
    let amount2=9999999999999999n;
    console.log(amount2);
    console.log(savingAmount);

    let r="9999999999999999";
    console.log(r);

