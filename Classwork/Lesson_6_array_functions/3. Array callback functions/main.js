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

// users.forEach(function (value, index, array) {
//     console.log(value, index);
//     console.log(array);
// });

users.forEach(value => console.log(value));
//_____________________________________________________________________

// let a = [];
// for (let user of users) {
//     if () {
//         a.push();
//     }
// }

// let filteredUsers = users.filter(function (value) {
//     return value.age > 30;
// });
// console.log(filteredUsers);

let filteredUsers = users.filter(value => value.age > 30);
console.log(filteredUsers);
//_____________________________________________________________________

// let mapedUsers = users.map(function (value, index) {
//     // return {
//     //     name: value.name,
//     //     age: value.age,
//     //     status: value.status,
//     //     id: index + 1
//     // };
//     return {...value, id: index + 1};
// });
// console.log(mapedUsers);

users.map((value, index) => {
    return {...value, id: index = 1};
});
//_____________________________________________________________________

let find = users.find(value => value.name === 'max');
console.log(find);
//_____________________________________________________________________

console.log(users.every(value => value.status));
console.log(users.some(value => value.status));
//_____________________________________________________________________

// let sort = users.sort((u1, u2) => {
//     return u1.age - u2.age;
// });
// console.log(sort);

console.log(users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
}));
//_____________________________________________________________________


let reduce = users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT: [], statF: []});
console.log(reduce);
