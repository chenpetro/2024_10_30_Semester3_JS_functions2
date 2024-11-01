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

// const myAverageScore = (aray) => {
//     let i = 0;
//     for (const element of aray) {
//         i = i + element;
//     }
//     console.log(i / aray.length);
// };

// myAverageScore([100, 75, 81, 96]); 
// myAverageScore([45, 63, 85, 70]);
// myAverageScore([77, 82, 60, 58]);
// myAverageScore([93, 99, 93, 96]);

// 5) Кількість елементів у масиві
// Напиши функцію countElements, яка приймає масив і повертає кількість елементів у цьому масиві. Використай цикл for для підрахунку.

// const countElements = (aray) => aray.length;
// console.log(countElements([45, 63, 85, 70, 75, 0, 5, "hu"]));


// 6) Сортування за зростанням
//Напиши функцію sortArrayAscending, яка приймає масив чисел і сортує його за зростанням без використання методу sort. Використай алгоритм сортування, наприклад, сортування бульбашкою.


function sortArrayAscending(arr) {
    let n = arr.length;
    let swapped;

    // Проходимо через масив n-1 разів
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Скидаємо прапорець заміни

        // Проходимо через масив, до n-i-1, оскільки останні i елементів вже відсортовані
        for (let j = 0; j < n - i - 1; j++) {
            // Якщо елемент знайдений більший, ніж наступний, міняємо їх місцями
            if (arr[j] > arr[j + 1]) {
                // Міняємо місцями arr[j] і arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true; // Встановлюємо прапорець, оскільки був обмін
            }
        }

        // Якщо за проходження не було обміну, масив вже відсортований
        if (!swapped) {
            break;
        }
    }

    return arr;
}

let numbers= [53,53,432,4322,4,6,7,1]
console.log("Відсортований масив:", sortArrayAscending(numbers));

// 7) Перевірка наявності значення
// Напиши функцію containsValue, яка приймає масив і значення, а потім повертає true, якщо значення є в масиві, і false, якщо ні. Використай цикл for.

function containsValue(arr,x) {
for (let index = 0; index < arr.length; index++) {
    if (arr[index]==x){
        answer = true
    }
    else answer=false
}
return answer
}
containsValue([23,43,545,54,64,6,55],55)
console.log(answer);



// 8) Пошук індексу елемента
// Напиши функцію findIndex, яка приймає масив і значення, а потім повертає індекс цього значення в масиві або -1, якщо такого значення немає. Використай цикл for.

function findIndex(arrfind,y) {
    for (let index = 0; index < arrfind.length; index++) {
        if (arrfind[index]===arrfind[y]){
            return index
        }
 
    }
    return -1
    }
    
    console.log(findIndex([233,4433,45,4,4,5,5],5));


// 9) Зворотний масив
// Напиши функцію reverseArray, яка приймає масив і повертає новий масив з елементами в зворотному порядку. Використай цикл for.

function reverseArray(arri) {
    let arrinew =[]
    for (let index = arri.length - 1; index >= 0; index--) {
arrinew.push(arri[index])
 
    }
    return arrinew
    }
    
    console.log(reverseArray([233,4433,45,1,4,5,9]));
    

// 10) Напиши функцію addElements, яка приймає два масиви однакової довжини і повертає новий масив, де кожен елемент – це сума відповідних елементів із двох масивів. Використай цикл for.

function addElements(arr1,arr2) {
    let arr3 =[]
    for (let index = 0; index < arr1.length; index++) {
arr3.push(arr1[index]+arr2[index])
    }
    return arr3
    }
    
 console.log(addElements([32,5,6],[5,1,2]))
   