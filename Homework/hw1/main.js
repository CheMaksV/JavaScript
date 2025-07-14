// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let d = 'hello';
console.log(d);
let e = 'owu';
console.log(e);
let f = 'com';
console.log(f);
let g = 'ua';
console.log(g);
let h = 1;
console.log(h);
let i = 10;
console.log(i);
let j = -999;
console.log(j);
let k = 123;
console.log(k);
let l = 3.14;
console.log(l);
let m = 2.7;
console.log(m);
let n = 16;
console.log(n);
let o = true;
console.log(o);
let p = false;
console.log(p);


// #6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Cheredilin';
let middleName = 'Maksym';
let lastName = 'Volodymyrovych';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);


// #4N0y5tufA
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// #ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let userName = prompt('Enter your name:', 'Maksym');
let userLastName = prompt('Enter your last name:', 'Volodymyrovych');
let userAge = prompt('Enter your age:', '28');
if (userName, userLastName, userAge !== null) {
    console.log(userName + ' ' + userLastName + ' ' + userAge);
} else {
    console.log('User cancelled the prompt.');
}
