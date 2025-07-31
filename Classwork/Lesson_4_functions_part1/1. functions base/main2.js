// let user1 = {
//     id: 1,
//     name: 'kokos',
//     age: 123,
//     status: true
// }
// let user2 = {
//     id: 2,
//     name: 'abrikos',
//     age: 234,
//     status: false
// }
// let user3 = {
//     id: 3,
//     name: 'tomat',
//     age: 345,
//     status: true
// }
// let user4 = {
//     id: 4,
//     name: 'ogirok',
//     age: 456,
//     status: false
// }

function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }
    return user;
}

let u1 = userFactory(1, 'kokos', 123, true);
let u2 = userFactory(2, 'abrikos', 234, false);
let u3 = userFactory(3, 'tomat', 345, true);
let u4 = userFactory(4, 'cucumber', 456, false);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);
