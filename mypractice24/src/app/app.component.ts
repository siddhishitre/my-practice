import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mypractice24';
  //let/var/const city = 'pune';
  //any data type : city:any
  //property

  city? : string ; //declaration of property

  city1 : string = 'pune';  //declaration + def of property
  city2 = 'pune'

  city3 = 'mumbai.....';

  name='siddhi';

  no1 = 10;
  no2 = 20;

  cars : string[] =['Swift','Jaguar','Audi'];
  car = this.cars[1]; //jaguar

  student = {name:'om',age:20}
  genderM = 'Male'
  genderF = 'Female'

  paintingHobby ='Painting';
  skechingHobby = 'Skeching';
  readingHobby ='Reading';
  UserHobbies : string[]=[];
  favCountry = 'india';

  favFruit = 'Apple';

  studentName : any = 'SSSSSSSSSS';
empName = 'swaransh';
   


heading : string ="My First Page......"
myCityName? :string;

addnumber1 : any;
addnumber2 : any;
addresult :any;

constructor(private router:Router){

}

//num1 : any = 20;
//num2 : any = 30;
//result? : number;

  //life cycle hooks
  
  //functions
  //data binding :it is a technique  communication between a component and the DOM

  //1.one way data binding : date transfer from typescript to dom
  //2.two way data binding : data transfer from typescript to dom ade dom to typescript

  //string interpulation : one way data binding technique : typescript to dom/html/template

  learninginterpolation(){
    return 'supekar';
  }
 gen(data? : any){
     console.log('data',data.target.value);
 }

    hobbies(event : any){
      console.log(event.target.value);
      this.UserHobbies.push(event.target.value);
      //this keyword use >> js : this keyword is getting used inside object to point objects key
      //ts :this keyword is used to point global properties. it is also used in functions to fetch value of global property 
      console.log(this.UserHobbies);
      console.log(this.favCountry);
      
      this.favCountry = 'malecia'
      console.log(this.favCountry);

      this.gen()

      }
      fruit(){
        console.log(this.favFruit);
        
      }
      submit(event :any){
        console.log(event);

      }
      addition(){
       // let number1 = 20;
        //let number2 = 30;
       // var res = number1 + number2;
       // console.log('addition result',res);
       //this.result =  parseInt(this.num1) + parseInt(this.num2)
       //console.log('res--',this.result);
       


    }

    
    heading1(){
      let pageheading="My First Apllication"
    }

    additionOfNumber(){
      this.addresult = this.addnumber1 + this.addnumber2
    }
    landing(){
      this.router.navigateByUrl('landinggg')
    }
    }





