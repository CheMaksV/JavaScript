// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo () {
//         console.log(this);
//     },
// };
// console.log(user);
// user.foo();

// let user = {
//     name: 'vasya',
//     age: 31,
//     foo() {
//         console.log('foo');
//     },
// };
//
// let {age, name, foo} = user;
// console.log(name);
// console.log(age);
// console.log(foo);
//
// let {status} = user;
// console.log(status);

/*function asd({name}) {
    console.log(name);
}

let obj = {a: 'a', s: 's', name: 'vasya', d: 'd'};
asd(obj);*/

// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
//     wife: {
//         name: 'anna',
//     },
// };
// console.log(user);
// user.foo();
//
// let {name: userName, age: userAge, wife: {name: wifeName}, wife} = user;
// console.log(userName, userAge);
// console.log(wife);
// console.log(wifeName);

// let numbers = [11, 22, 33];
// let [a, , c] = numbers;
// console.log(a, c);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let [user1, user2] = users;
console.log(user1);
console.log(user2);
