// const printMessage = function (message) {
//     console.log(message);
// };
// const higherOrderFunction = function (callback) {
// const string = 'HOCs are awesome';    callback(string);
// };
// higherOrderFunction(printMessage);

// const names = [
//   "dana",
//   "vova",
//   "lada",
//   "masha",
//   "dana",
//   "vova",
//   "lada",
//   "masha",
//   "dana",
//   "vova",
//   "lada",
//   "masha",
// ];
// const filter = function (array) {
//   let filterNames = [];
//   for (const element of array) {
//     if (element.includes("d")) {
//       filterNames.push(element);
//     }
//   }
//   return console.log(filterNames);
// };
// filter(names);






// const randomNumber = [10, 56, 34, 90, 23, 56, 45, 12, 34, 56];

// const filterNumber = function (num) {
//   let numberFixed = [];
//   for (const number of num) {
//     if (number > 50) {
//       numberFixed.push(number);
//     }
//   }
//   return console.log(numberFixed);
// };
// filterNumber(randomNumber);


// // Звичайний функціональний вираз
// const add = function(a, b, c) {
//     return a + b + c;
//   };
 
//   // Теж саме записано, як стрілкова функція
//   const add2 = (a, b, c) => {
//     let g = 10
//     return a + b + c + g;
//   }
// console.log(  add2(2,3,4)
// );
  

// const hello1 = () => 'hello JavaScript'
//     console.log(hello1());
     

// const hello2 = (name) => `hello ${name}`;
// console.log(hello2("Vasyl"));

// const mul = (n, m) => {
//     let dob = n * m;
//     let sum = n + m;
//     let vidn = n - m;
//     return console.log(dob, sum, vidn);
// };
// mul(5,2)


// 3) Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

const myAverageScore = (aray) => {
    let i = 0;
    for (const element of aray) {
        i = i + element;
    }
    console.log(i / aray.length);
};

myAverageScore([100, 75, 81, 96]); 
myAverageScore([45, 63, 85, 70]);
myAverageScore([77, 82, 60, 58]);
myAverageScore([93, 99, 93, 96]);
