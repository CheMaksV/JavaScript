// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let evenNumbers = [];
for (let i = 0; i < 50; i++) {
    evenNumbers[i] = i * 2;
}
console.log(evenNumbers);


//     b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumbers = [];
for (let i = 0; i < 50; i++) {
    oddNumbers[i] = i * 2 + 1;
}
console.log(oddNumbers);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let randomNumbers = [];
for (let i = 0; i < 20; i++) {
    randomNumbers[i] = Math.random();
}
console.log(randomNumbers);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let randNumbers = []
let min = 8;
let max = 732;
for (let i = 0; i < 20; i++) {
    randNumbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randNumbers);


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < randNumbers.length; i += 3) {
    console.log(randNumbers[i]);
}
console.log('');


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < randNumbers.length; i += 3) {
    if (randNumbers[i] % 2 === 0) {
        console.log(randNumbers[i]);
    }
}
console.log('');


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newNumbers = [];
let index = 0;
for (let i = 2; i < randNumbers.length; i += 3) {
    if (randNumbers[i] % 2 === 0) {
        console.log(randNumbers[i]);
        newNumbers[index] = randNumbers[i];
        index++;
    }
}
console.log(newNumbers);
console.log('');


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56
for (let i = 0; i < randNumbers.length; i++) {
    if (randNumbers[i + 1] % 2 === 0) {
        console.log(randNumbers[i]);
    }
}
console.log('');


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrNums = [100, 250, 50, 168, 120, 345, 188];
let total = 0;
for (let i = 0; i < arrNums.length; i++) {
    total += arrNums[i];
}
let average = total / arrNums.length;
console.log(average);
console.log('');


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr = [];
let min1 = 1;
let max1 = 100;
for (let i = 0; i < 10; i++) {
    randomArr[i] = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}
let newArr = [];
let ind = 0;
for (let i = 0; i < randomArr.length; i++) {
    newArr[ind] = randomArr[i] * 5;
    ind++;
}
console.log(newArr);
console.log('');


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mixArr = ['A', '100', 234, 671, [5, 'B', 12], {key: 'значення'}, true, false, null, 80, NaN];
let numberArr = [];
let ind1 = 0;
for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === 'number' && mixArr[i] === mixArr[i]) {
        numberArr[ind1] = mixArr[i];
        ind1++;
    }
}
console.log(numberArr);
