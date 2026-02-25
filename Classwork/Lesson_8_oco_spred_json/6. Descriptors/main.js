let user = {
    firstName: 'Taras',
    lastName: 'Schevchenko'
}

user.firstName = 'qwe';
console.log(user);
for (let userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 100500,
        writable: false,
        enumerable: false,
        configurable: false
    }
);
console.log(user);


user.id = 1;

console.log(user);
for (let userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 200600,
        writable: false,
        enumerable: false,
        configurable: false
    }
);
console.log(user);
