console.log("my name is swaransh");

//conditions :if,if-else,else-if,switch

//if(){
//   //code block
//}

//if(){
//   //code block
//} else{}

let a = 10;
let b = 20;

// if condition:
if (a < b) {
    console.log("a is small");
}

//if-else condition
if (a>b){
    console.log("a is small");
}
else{
    console.log("a is big");
}

//esle-if -if want tocheck more than 2 conditions
if(a=b){
    console.log("a and b are equal");
}
else if(a<b){
    console.log("a is smaller than b");
}
else if(b>a){
    console.log("b is greater than a");
}
else{
    console.log("else block");
}


let color="black"
switch (color) {
    case "blue":
        console.log("color is blue");
        //break;

        case "black":
            console.log("color is black");
         //break;

        case "white":
        console.log("color is white");
        //break;

    default:
        console.log("no color");
        //break;
}
//nested if : if inside if 

let x = 50;
let y = 180;

if(x < 100){
     if(x < y){
          if(y < 100){
             console.log(y);
          }
     }
}

//nested if : if inside if
let  m= 50;
let  n= 80;

if(m<100){
    if(m<n){
        if(n<100)
        console.log(n);

    }
}
