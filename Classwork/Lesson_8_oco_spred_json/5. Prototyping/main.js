console.log({});
console.log({}.__proto__);

let base = {
    id: 1,
    name: 'kokos'
};

let copy = Object.create(base);
copy.surname = 'foo';

console.log(base);
console.log(copy); // {}
console.log(copy.id); // 1
console.log(copy.name); // kokos
console.log(copy.hasOwnProperty('id'));
console.log(copy.hasOwnProperty('surname'));

copy.id = 100;

console.log(copy);
console.log(copy.hasOwnProperty('id'));

let obj = {};
obj.__proto__ = base;
console.log(obj);
