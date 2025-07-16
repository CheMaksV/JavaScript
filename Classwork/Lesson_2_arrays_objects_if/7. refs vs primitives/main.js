// Примітиви
// number
// string
// boolean

let a = 100;
let b = a;
b = b + 10; // 110
console.log(a); //100


// Референціали (Силочні типи даних)
// Масиви []
// Об'єкти {}

let user = {name: 'vasya'};
let user2 = user;
console.log(user2);
user2.age = 31;
console.log(user2);

console.log(user);



