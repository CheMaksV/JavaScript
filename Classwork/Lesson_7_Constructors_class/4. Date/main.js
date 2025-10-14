let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// let date1 = new Date(1760468495644);
// let date1 = new Date("June 10 1991 21:21:21");
let date1 = new Date(1996, 10, 24, 6, 15, 31, 0);
console.log(date1);
date1.setDate(25);
console.log(date1);

let user = {
    id: 1,
    name: 'kokos',
    bday: new Date(1760468495644),
};
console.log(user);
