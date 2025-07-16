let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
    {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
    {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
];
console.log(users);
console.log(users[0]);
let user0 = users[0];
console.log(user0.age);
console.log(user0['age']);

console.log(users[0]);
console.log(users[0].skills);
console.log(users[0].skills[2]);
console.log(users[0]['skills'][2]);
let user = users[0];
let skills = user['skills'];
console.log(skills[2]);


