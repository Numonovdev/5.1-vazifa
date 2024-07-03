// const student = {
//      name: "Alice",
//      age: 25,
//      course: 'Computer Science'
// };
// for(let key in student){
//      console.log( key + ': ' + student[key])
// }







// Massivlarga oid

// 2-masala
// let arr = [
//      {name: 'sanjar', age: 15},
//      {name: 'vali', age: 18},
//      {name: 'jahon', age: 21},
//      {name: 'ali', age: 35},
// ];
// let arrr = [];
// arr.map(function(value){
//      let son = value.age;
//      if(son > 20){
//           arrr.push(value)
//      }
// })
// let first = arrr[0];
// console.log(first.name.toUpperCase());

// 3-masala



// 4-masala

// let Numbers = [1, 200, 3, 4, 5, 8, 21];
// let result = [];

// let res = Numbers.every(function(value){
//      return value > 0
// })
// if(res == true){
//     result.push('Barcha sonlar musbat')
// } else{
//      result.push('Musbat bolmagan sonlar bor')
// }
// let ress = Numbers.some(function(value){
//      return value > 100
// })
// if(ress == true){
//     result.push('Katta son bor')
// } else{
//      result.push('Katta son yoq')
// }
// console.log(result)



// 5-masala

// forEach
// let massiv = [1, 2, 3, 4, 5, 6];
// let res = []
// massiv.forEach(function(value){
//       res.push(value ** 2);
// })
// console.log(res);

// map
// let massiv = [1, 2, 3, 4, 5, 6];
// let res = massiv.map(function(value){
//       return value ** 2;
// })
// console.log(res);

// 7-masala

// let arr = [
//      {name: 'sanjar', age: 15, baho: 78,},
//      {name: 'vali', age: 18, baho: 85,},
//      {name: 'jahon', age: 21, baho: 62,},
//      {name: 'ali', age: 35, baho: 98,},
// ];
// let arrr = [];
// arr.map(function(value){
//      let son = value.baho;
//      if(son >= 80){
//           arrr.push(value)
//      }
// })
// let first = arrr[0];
// console.log('name:', first.name, 'age:', first.age)
// let result = [];
// arrr.filter(function(vale){
//      let res = vale.name
//     return result.push(res.toUpperCase());
// }) ;
// console.log(result);


// Yozuvlarga oid.

// 1-masala
// let str = 'salom hammaga';
// console.log(str.toUpperCase());

// 2-masala

// let str = 'salom najot talimdagilarga'
// console.log(str.includes('lom'))

// 3-masala

//   function JavaSriptjs(str){
//        let arr = str.split(' ');
//        let res = []        
//      arr.forEach(function(value){
//           value = value.replace('JavaScript', 'JS');  
//           res.push(value)
//      })
//      return res.join(' ');
//   }
// console.log(JavaSriptjs('JavaScript yangi oydan yaxshi boshladik JavaScript yaxshi dasturlash tili '))




// 4-masala

// function teskari(str){
//      let res = str.split(' ');
//      let result = []
//      res.forEach(function(value){
//              result.unshift(value);
//      })
//      return result.join(' ');
// }
// console.log(teskari('men yaxshi oqishga qaror qildim'))


// 5-masala

// let str = ' salomberdik kop sersalomman '
// console.log(str.trim())  