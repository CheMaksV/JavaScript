// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 'name', 'lastName', true, false, {value: 1}, ['email'], null, NaN];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]['value']);
console.log(arr[7][0]);
console.log(arr[8]);
console.log(arr[9]);


// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {title: 'A', pageCount: 111, genre: 'AA'};
let book2 = {title: 'B', pageCount: 222, genre: 'BB'};
let book3 = {title: 'C', pageCount: 333, genre: 'CC'};
console.log(book1);
console.log(book2);
console.log(book3);


// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється масивом. Кожен автор має поля name та age.

let book1A = {
    title: 'A',
    pageCount: 111,
    genre: 'AA',
    authors: [{name: 'vasya', age: 45}]
};
let book1B = {
    title: 'A',
    pageCount: 111,
    genre: 'AA',
    authors: [{name: 'kolya', age: 35}]
};
let book1C = {
    title: 'A',
    pageCount: 111,
    genre: 'AA',
    authors: [{name: 'petya', age: 25}]
};
console.log(book1A);
console.log(book1B);
console.log(book1C);


// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username, password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya', username: 'vasya123', password: 'fsdfdsf',},
    {name: 'kolya', username: 'kolya123', password: 'sdgsdgdsg',},
    {name: 'petya', username: 'petya123', password: 'sdgfsghdb',},
    {name: 'olga', username: 'olga123', password: 'sdgdfhb',},
    {name: 'anna', username: 'anna123', password: 'dfgdhgfnf',},
    {name: 'maryna', username: 'maryna123', password: 'sdgdfshe5yfn',},
    {name: 'sveta', username: 'sveta123', password: 'sdmnf37',},
    {name: 'maks', username: 'maks123', password: 'vlcnvbiu37',},
    {name: 'ivan', username: 'ivan123', password: 'cambv83',},
    {name: 'denys', username: 'denys123', password: 'dfmngkhi3',},
];
console.log(users[0]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);


// #coYydZuaeEB
// – Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temps = [
    {day: 'monday', value: {morningTemp: -1, daytimeTemp: 15, evening: 8}},
    {day: 'tuesday', value: {morningTemp: -2, daytimeTemp: 17, evening: 6}},
    {day: 'wednesday', value: {morningTemp: -3, daytimeTemp: 19, evening: 4}},
    {day: 'thursday', value: {morningTemp: -4, daytimeTemp: 21, evening: 0}},
    {day: 'friday', value: {morningTemp: 0, daytimeTemp: 21, evening: 3}},
    {day: 'saturday', value: {morningTemp: -1, daytimeTemp: 23, evening: 2}},
    {day: 'sanday', value: {morningTemp: -3, daytimeTemp: 27, evening: 1}}
];
console.log(temps);


// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте скрипт при a, що дорівнює
let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = +prompt('Enter time from 0 to 59');
if (time >= 0 && time < 15) {
    console.log('first part of the hour');
} else if (time >= 15 && time < 30) {
    console.log('second part of the hour');
} else if (time >= 30 && time < 45) {
    console.log('third part of the hour');
} else if (time >= 45 && time < 60) {
    console.log('quarter part of the hour');
} else {
    console.log('????')
}


// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day <= 10) {
    console.log('first part of month');
} else if (day > 10 && day <= 20) {
    console.log('second part of month');
} else if (day > 20 && day <= 31) {
    console.log('third part of month');
}


// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
let key = +prompt('Enter your day of week from 1 to 7');
switch (key) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thursday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('????');
}


// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати, коли введені рівні числа.
let number1 = 1;
let number2 = 10;
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log('equal numbers');
}


// #iBvqtjEm
// – Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код, який буде присвоювати змінній х значення “default”, якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x1 = 0;
// if (x1 === '' || x1 === 0 || x1 === false || x1 === null || x1 === undefined || x1 === NaN) {
//     x1 = 'default';
// }

let x1 = 0;
if (!x1) {
    x1 = 'default';
}
console.log(x1);

