// ==========================exceptional handling===============================
// 'use strict';

// var costOfProduct = 1000;
// var discount = 1200;
// try {
//     if (costOfProduct <= discount)
//       throw new Error(
//         'Cost of the product should be higher than the discount value'
//       );
//     var totalCost = costOfProduct - discount;
//     console.log('Total Cost: ${totalCost}');
//   } catch (error) {
//     console.log('Oops! We have an error: ', error.message);
//   } finally {
//     console.log('Thank you for using the app!');
  // } 
 /*output:Oops! We have an error:  Cost of the product should be higher than the discount value
Thank you for using the app!*/
  // ==========================var and let ===============================
//   'use strict';
// let x = 200; 
// for (let x = 0; x < 10; x++) {
//     console.log(`The number is ${x}`);
//   }
//   console.log(`Original Number: ${x}`);
  /*output:
  The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
Original Number: 200 */

  //=============================else if=======================================================
//   'use strict';

// let grade;
// let percentage = 85;
// if (percentage <= 100 && percentage >= 91) {
//     grade = 'A+';
//   } else if (percentage <= 90 && percentage >= 81) {
//     grade = 'B+';
//   } else if (percentage <= 80 && percentage >= 71) {
//     grade = 'C+';
//   } else if (percentage <= 70 && percentage >= 61) {
//     grade = 'D+';
//   } else {
//     grade = 'Fail';
//   }
// console.log(`The student has secured ${grade}`);

/*output:The student has secured B+ */

 // ==========================switch case ===============================
//  'use strict';

// let item = 'Lettuce';
// let type;
// switch (item) {
//     case 'Apple':
//     case 'Banana':
//     case 'Kiwi':
//     case 'Strawberry':
//       type = 'fruit';
//       break;
//     case 'Lettuce':
//     case 'Potato':
//     case 'Celery':
//     case 'Eggplant':
//       type = 'vegetable';
//       break;
//     default: {
//       throw new Error('Unable to identify item...');
//     }
//   }
// console.log(`${item} is a ${type}`);
/*output: Lettuce is a vegetable */
// // ==========================ternary operator ===============================
// 'use strict';

// const today = 'Thursday';
// const typeOfDay =
//   today === 'Saturday' || today === 'Sunday'
//     ? 'Weekend'
//     : today === 'Wednesday'
//     ? 'Hump Day'
//     : 'Weekday';

// console.log(`${today} - ${typeOfDay}`);

// /*output:Thursday - Weekday */

// const number=5
// const result = number*2>5 ?( number===10 ? 'Number is 5': 'Twice of number is not 10') : 'Number is not 5'
// console.log(result)

// /*output:Twice of number is not 10 */

// // ==========================Binary Logical Operator ===============================

// 'use strict';

// let inputUsername = 'joe';
// let inputPassword = 'joe@901';

// const database = {
//   joe: {
//     user: 'Joe Mockery',
//     password: 'joe@901',
//   },
// };
// let checkPassword = database[inputUsername].password === inputPassword;
// checkPassword &&
// console.log(`${database[inputUsername].user || `User`} is logged in...`);

/*output:Joe Mockery is logged in...*/

// ==========================Arrays ===============================
// 'use strict';
// var bestsellers = [
//     'Contact',
//     'Deception Point',
//     'Digital Fortress',
//     'Jurassic Park',
//     'Shantaram',
//   ];
//   console.log('Bestsellers: ', bestsellers.toString());
//   bestsellers.push('Freakonomics');
//   bestsellers[1] = 'The Lord of the Rings';
//   console.log('Bestsellers: ', bestsellers.toString());

// ==========================Nullish Coalescing operator ===============================
//   'use strict';

// let tempData = {
//   location: 'Lake Eastwood',
//   sensor1: 0,                      //if it is null then it gives 1.8 output
//   sensor2: null,
//   sensor3: 1.8,
// };

// console.log(
//     `${tempData.location}: ${
//       tempData.sensor1 ?? tempData.sensor2 ?? tempData.sensor3
//     } degrees`
//   );

//   /*output:Lake Eastwood: 0 degrees */

// ==========================Nullish Coalescing operator ===============================
  'use strict';

const users = [
  {
    name: 'Joe',
    address: {
      home: '212, River Drive',
      city: 'New York',
      country: 'US',
    },
  },
  {
    name: 'Jane',
  },
];

try {
  console.log(`${users[0].name} lives in ${users[0].address.city}`);
//   console.log(`${users[1].name} lives in ${users[1].address.city}`);
console.log(
    `${users[1].name} lives in ${users[1].address?.city ?? 'a big city'}`
  );
} catch (error) {
  console.log(error.message);
}
/*output:Joe lives in New York
Jane lives in a big city */