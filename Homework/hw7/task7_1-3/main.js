// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'vasya', 'petrov', 'qwe@gmail.com', '+987654321233'),
    new User(3, 'maryna', 'vovk', 'asd@gmail.com', '+987654321233'),
    new User(2, 'maks', 'petrov', 'zxc@gmail.com', '+987654321233'),
    new User(4, 'kokos', 'petrov', 'qwe@gmail.com', '+987654321233'),
    new User(7, 'yarik', 'petrov', 'asd@gmail.com', '+987654321233'),
    new User(5, 'lena', 'vovk', 'zxc@gmail.com', '+987654321233'),
    new User(9, 'volodymyr', 'petrov', 'qwe@gmail.com', '+987654321233'),
    new User(8, 'mykyta', 'petrov', 'asd@gmail.com', '+987654321233'),
    new User(6, 'ostap', 'petrov', 'zxc@gmail.com', '+987654321233'),
    new User(10, 'yan', 'petrov', 'qwe@gmail.com', '+987654321233'),
];

console.log(users);


// #2ikXsE2WiKZ
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);


// #pOeHKct
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((user1, user2) => user1.id - user2.id);
console.log(sortedUsers);


