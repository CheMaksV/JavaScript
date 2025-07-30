// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        let city = citiesWithId[j];
        if (user.id === city.user_id) {
            usersWithCities[i] = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city
                }
            }
            break;
        }
    }
}
console.log(usersWithCities);
console.log('');


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numberArr = [];
let min = 0;
let max = 100;
for (let i = 0; i < 10; i++) {
    numberArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numberArr[i] % 2 === 0) {
        console.log(numberArr[i]);
    }
}
console.log('');


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newArr = [];
let i = 0;
while (i < numberArr.length) {
    newArr[i] = numberArr[i];
    i++;
}
console.log(newArr);
console.log('');


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < letters.length; i++) {
    word += letters[i];
}
console.log(word);
console.log('');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let letters1 = ['a', 'b', 'c'];
let word1 = '';
let index = 0;
while (index < letters1.length) {
    word1 += letters1[index];
    index++;
}
console.log(word1);
console.log('');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let letters2 = ['a', 'b', 'c'];
let word2 = '';
for (let letter of letters2) {
    word2 += letter;
}
console.log(word2);
