// // The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// // If you do not require a simulated backend, you can remove the code shown below.
// let a = null;
// let num=parseInt(a);
// console.log(num, typeof(num));
// // ---------------------------------------
// console.log('---------------------this is if else condition function-------------------------');
// let weather;
//  function getFoodItem(weather){
// if(weather=='winter')
// {
//   console.log("It is a hot soup");
// }else if(weather=='summer')
// {
//   console.log("It is a icecream");
// }
// else
// {
//   console.log("coffee!!!");
// }
//  }
//  getFoodItem('rainy');
//  // ---------------------------------------
// console.log('---------------------greet according to date and time------------------------');

// function greet()
// {
  
  let today=new Date();
  console.log(today);
//    let minutes=today.getMinutes();
//   console.log(minutes);

//   // -----------
//   let hours=today.getHours();
//   console.log(hours);

//   if(hours < 12)
//   {
//     console.log(`good morning`);
//   }
//   else if(hours >= 12 && hours < 17)
//   {
//     console.log(`good aftenoon`);
//   }
//   else if(hours >= 17 && hours < 19)
//   {
//     console.log(`good evening`);
//   }
//   else
//   {
//     console.log(`night`);
//   }
// }
// greet();

 // ---------------------------------------
//  console.log('---------------------switch case------------------------');

//  let color ='black';

//  switch(color)
//  {
//   case 'green':
//     console.log('Iam a Green!!');
//     break;
//     case 'purple':
//     console.log('Iam a purple!!');
//     break;
//     case 'voilet':
//     console.log('Iam a voilet!!');
//     break;
//     case 'pink':
//     console.log('Iam a pink!!');
//     break;
//     case 'red':
//     console.log('Iam a red!!');
//     break;
//     default:
//       console.log('Iam a the color which is not present ${color}!!');
//     break;
//  }


 // ---------------------------------------
//  console.log('---------------------ternary operator------------------------');

//  let result='tails';
// //  if(result=='heads')
// //  {
// //   console.log('Head It Is');
// //  }
// //  else
// //  {
// //   console.log('Tails it is');
// //  }

//  (result=='heads') ? console.log('Head It Is') : console.log('Tails It Is');

  // ---------------------------------------
//   console.log('---------------------&& OPERATOR------------------------');

//   function birthday(mon,date)
//   {
//     if(mon=='feb' && date==19)
//     {
// console.log(`today is my birthday ${mon} ${date}`);
//     }
//     else
//     {
//       console.log(`today is not my birthday beacause the date is ${mon} ${date}`);
//     }
//   }
//   birthday('fe',19);

//    // ---------------------------------------
//    console.log('---------------------|| OPERATOR------------------------');

//    function myfav(color)
//    {
//     if(color=='red' || color=='green')
//     {
//       console.log('my fav colors');
//     }
//     else
//     {
//       console.log('not my fav colors');
//     }
//    }
// myfav('red');
 // ---------------------------------------
//  console.log('---------------------For Loop------------------------');

//  for(let num=0;num<=100;num++)
//  {
//   console.log(`the number is ${num}`);
//  }




// ------------------------------------------
// let sum=0;
// for(let j=1;j<=10;j++){
//   console.log(`loop number is:${j}`);
//   sum=sum+j;
// }
// console.log(`sum is ${sum}`);


 // ---------------------------------------
  // console.log('---------------------for of(values)-----------------------');

  // let numbers=[1,2,3,4,5];
  // for(let num of numbers)
  // {
  //   console.log(num*2);
  // }
 
  // let fruits=['apple','mango','banana','grapes'];
  // for(let fruit of fruits)
  // {
  //   console.log(fruit);
  //   console.log(fruit.charAt(0));
  //   console.log(fruit.charAt(fruit.length - 1));
  // }

  
 // ---------------------------------------
//  console.log('---------------------for in(indexes)-----------------------');
//  let fruits=['apple','mango','banana','grapes'];
//  for(let fruit in fruits)
//   {
//     console.log(fruit);  /*indexes */
//     console.log(fruits[2]); /*banana 3 times  */
    
//   }

//-------------------------------objects for in-----------------------------

// let person = new Object();

// person.id = 1;
// person.name = 'Shashwat';
// person.location = 'Bhutan';

// let person = {
//   name: 'Shantanu',
//   id: 1,
//   age:32,
//   gender:'M',
//   married: true,
//   isHappy: false
// }
// person.married=false;
// person.isHappy=true;
// for(let x in person)
// {
// console.log(person[x]);
// }



  // ---------------------------------------
//   console.log('---------------------while Loop------------------------');
// let num=0;
//   while(num<5)
//   {
//     console.log(`the num is ${num}`);
//     num++;
//   }


  // ---------------------------------------
  // console.log('---------------------functions------------------------');

  // function incre(num){
  //   return num+1;
  // }
  // let res=incre(99);
  // console.log(res);
  // console.log(incre(200));


// ---------------------------------------
//   console.log('---------------------this keyword------------------------');
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName());





//   function ageVerify(){
//     if(this.age> 18){
//         console.log("Yes you can drive");
//     } else {
//         console.log("No you cannot drive");
//     }
// }
 
// const per1 = {age: 21};
// const per2 = {age: 16};
// ageVerify.call(per1);
// ageVerify.call(per2);



// let age = 22;
// function ageVerify(){
//     console.log(this.age);
//     console.log(age);
//  // if(this.age> 18){
//  //  console.log("Yes you can drive");
//  // } else {
//  //  console.log("No you cannot drive");
//  // }
// }
// ageVerify();

// ---------------------------------------
// console.log('---------------------arrow function------------------------');

// function goToSleep(){
//   let hours=4;
//   return 'iam sleeping for'+ '  ' + hours + '  ' + 'hours';
// }
// console.log(goToSleep());


// let goToSleep2=()=>{
//   let hours=4;
//   return 'iam sleeping2 for'+ '  ' + hours + '  ' + 'hours';
// }
// console.log(goToSleep2());


// var hour=4;
// const goToSleep3=()=>{
//   return 'iam sleeping3 for'+ '  ' + this.hour + '  ' + 'hours';
// }
// console.log(goToSleep3());









 
 




