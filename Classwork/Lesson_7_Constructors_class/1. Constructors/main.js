// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
//     console.log(this);
// }
//
// let user1 = new User('asd', 123, true);
// let user2 = new User('qwe', 12, false);
// let user3 = new User('qwe', 12, false, {name: 'zxc'});

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function () {
        console.log('hi');
    };
    console.log(this);
}

let user1 = new User('asd', 123, true, 'zxc', 456);
