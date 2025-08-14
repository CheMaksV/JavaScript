// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
let rectangleSquare = (a, b) => a * b;
console.log(rectangleSquare(2, 3));


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
let circleSquare = (radius) => Math.PI * radius * radius;
console.log(circleSquare(10));


// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let cylinderSquare = (height, radius) => 2 * Math.PI * radius * height;
console.log(cylinderSquare(10, 5));


// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
let printerArray = (array) => {
    for (let item of array) {
        console.log(item);
    }
}


// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let printerParagraph = (text) => {
    document.write(`<p>${text}</p>`)
}

printerParagraph('qqqqqqqq');


// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let printerList = (text) => {
    document.write(`
                    <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>
                  `);
}

printerList('qqqqqqqq');


// #0Kxco1edSN
// – створити функцію, яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let printerLists = (text, numList) => {
    document.write(`<ul>`);
    for (let i = 0; i < numList; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

printerLists('qqqqqqqq', 5);


// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let printerListOfArray = (arrayOfPrimitives) => {
    document.write(`<ul>`);
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

printerListOfArray([1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', true, false]);


// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

let printerListsOfArray = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item.id}. ${item.name} - ${item.age}</li>`);
    }
    document.write(`</ul>`);
}

printerListsOfArray(users);


// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву
let minNumOfArray = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minNumOfArray([11, 22, 33, 44, 55]));


// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let basket = 0;
    for (let number of arr) {
        basket += number;
    }
    return basket;
}

console.log(sum([1, 2, 10]));


// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return -Infinity;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// #mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let rate = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            rate = currencyValues[i].value;
            break;
        }
    }
    if (rate === null) {
        return 'Currency not found';
    }
    return sumUAH / rate;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
