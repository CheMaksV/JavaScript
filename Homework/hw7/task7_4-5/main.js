// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1,
        'vasya',
        'petrov',
        'qwe@gmail.com',
        '+987654321233',
        new Product('milk', 50), new Product('eggs', 170), new Product('lime', 40)),
    new Client(3,
        'maryna',
        'vovk',
        'asd@gmail.com',
        '+987654321233',
        new Product('tv', 25000), new Product('phone', 20000)),
    new Client(2,
        'maks',
        'petrov',
        'zxc@gmail.com',
        '+987654321233',
        new Product('tomato', 30), new Product('cucumber', 35), new Product('banana', 60),
            new Product('orange', 50)),
    new Client(4,
        'kokos',
        'petrov',
        'qwe@gmail.com',
        '+987654321233',
        new Product('milk', 50), new Product('eggs', 170), new Product('lime', 40)),
    new Client(7,
        'yarik',
        'petrov',
        'asd@gmail.com',
        '+987654321233',
        new Product('tv', 25000), new Product('phone', 20000)),
    new Client(5,
        'lena',
        'vovk',
        'zxc@gmail.com',
        '+987654321233',
        new Product('tomato', 30), new Product('cucumber', 35), new Product('banana', 60),
            new Product('orange', 50)),
    new Client(9,
        'volodymyr',
        'petrov',
        'qwe@gmail.com',
        '+987654321233',
        new Product('milk', 50), new Product('eggs', 170), new Product('lime', 40)),
    new Client(8,
        'mykyta',
        'petrov',
        'asd@gmail.com',
        '+987654321233',
        new Product('tv', 25000), new Product('phone', 20000)),
    new Client(6,
        'ostap',
        'petrov',
        'zxc@gmail.com',
        '+987654321233',
        new Product('tomato', 30), new Product('cucumber', 35), new Product('banana', 60),
            new Product('orange', 50)),
    new Client(10,
        'yan',
        'petrov',
        'qwe@gmail.com',
        '+987654321233',
        new Product('milk', 50), new Product('eggs', 170), new Product('lime', 40)),
];
console.log(clients);


// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClients);
