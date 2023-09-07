//string methods

let text = 'I live in Mumbai';
let textlength = text.length;
console.log('textlength',textlength);

//slice(start[inclusive], end[exclusive])

 let a = text.slice(3,12);
 console.log('a>>>',a);

 let b = text.slice(-10,-5);
 console.log(b);//slice (start[exclusive],end[inclusive]

 console.log(text.substring(-6,9)); // i live in  -6=0 so 9 will be end index(0,9)

 console.log(text.substring(6,-9)); //i live -9=0  so  6 will be end index(0,6)

 //substr(start index, length)
 console.log(text.substr(2,9));

 //replace

 let r = 'fghjk ikjh uiu iuyedt pune uytg edftyuj fyuol wsdfty uhjik pune wsdfty tyh i'
 let q = r.replace('pune','mumbai'); //for capital (/pune/gi,'mumbai') exp>>> Pune
 console.log(q);

 let p = r.replaceAll('pune','mumbai');
console.log(p);

//concat()
let FN = 'siddhi';
let LN = 'supekar';
let f_name = FN + ' '+ LN; //for space ' '+
console.log(f_name);


let F_name=FN.concat(' ',LN,' ','shitre');
console.log(F_name);

// toLowerCase()

let city='Mumbai KKKKKK GHjnmllFGTSHB';
let city1= city.toLowerCase();
console.log(city1);

//toUpperCase()

let city2=city.toUpperCase();
console.log(city2);

   //trim()
let name3 = '  siddhi  ';
let name4 = name3.trim();
 console.log(name4);

 //trimStart()
 let name5 = name3.trimStart();
 console.log(name5);

 //trimEnd()
 let name6 = name3.trimEnd();
 console.log(name6);

 //charAt()
 let text5 = 'swaransh shitre';
console.log(text5.charAt(3));

//split() always return array
 let dob = '04-04-1992';
 let newdob = dob.split('-');
 console.log(newdob);
 console.log(newdob[0]);

 let u = 'swaransh s shitre';
 let u1 = u.split(' ');
 console.log(u1);
 console.log(u1[0]);
 console.log(u1[2]);

 //string search method
 //string indexof()
 let d='dog rtyujhgf gggg';
 console.log(d.indexOf('g')); //first match index
 console.log('last index',d.lastIndexOf('g')); //last match index

 let text2 = "please locate where 'locate' occurse";
 console.log(text2.search('locate'));
 console.log(text2.search(/locate/));

 let text3 = "please locate ghujhg asere where 'locate' occurse";
 console.log(text3.match('ase'));
 console.log(text3.match(/ase/g));

 let text4 = "hello world welcome to the universe.";
 console.log(text4.includes('world'));

//let a1 = {
  // "employees": {
    //  { "firstName" : "swaransh", "lastName" : "shitre" },
//{ "firstName" : "siddhi", "lastName" : "shitre" },
//{ "firstName" : "sanket", "lastName" : "shitre" }
  // },
   //statusCode:7001,
   //successMsg:'data saved succussfully'
 //}


 //startwith()
 let msg = " hhh 200 success";
 console.log(msg.startsWith('200'));

 //endsWith()
text7='swaransh shitre';
console.log(text7.endsWith('e'));

//matchAll()
text7='swaransh sanket shitre';
console.log(Array.from(text7.matchAll('sanket')));


