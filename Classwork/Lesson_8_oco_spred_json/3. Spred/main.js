// let user = {
//     name: 'vasya',
//     age: 31
// };
//
// let user2 = user;
//
// let user3 = {
//     name: 'vasya',
//     age: 31
// };
//
// console.log(user === user2);
// console.log(user === user3);


// let user = {
//     name: 'vasya',
//     age: 31
// };
//
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
//
// userCopy.age = 0;
// console.log(userCopy);
// console.log(user);


let nums = [11, 22, 33];
let nums2 = [...nums];
console.log(nums2 === nums);
