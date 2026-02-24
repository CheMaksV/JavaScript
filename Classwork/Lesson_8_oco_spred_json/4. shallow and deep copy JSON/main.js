let user = {
    name: 'vasya',
    skills: ['html', 'js'],
    /*greeting() {
    }*/
}

// let userClone = {...user};
// console.log(userClone === user);
// console.log(userClone.skills === userClone.skills);

let assign = Object.assign({}, user);
console.log(assign);
console.log(user === assign);
console.log(user.skills === assign.skills);
console.log('');

/*
let s = JSON.stringify(123);
console.log(s);
console.log(typeof s);
*/

let userJsonClone = JSON.stringify(user); // convert to JSON
console.log(userJsonClone);

/*
let parse = JSON.parse('123');
console.log(parse);
console.log(typeof parse);
*/

let parseUserJsonClone = JSON.parse(userJsonClone);
console.log(parseUserJsonClone);
console.log(user);
console.log(user === parseUserJsonClone);
console.log(user.skills === parseUserJsonClone.skills);
console.log('');

let userStructuredClone = structuredClone(user);
console.log(userStructuredClone);
console.log(userStructuredClone === user);
console.log(userStructuredClone.skills === user.skills);
