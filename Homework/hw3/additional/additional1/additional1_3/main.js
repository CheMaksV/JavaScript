// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < numbers.length) {
    let number = numbers[i];
    i++;
}

// 2. перебрати його циклом for
for (let number of numbers) {
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let i1 = 0;
while (i1 < numbers.length) {
    let number = numbers[i1];
    if (i1 % 2 !== 0) {
        console.log(number);
    }
    i1++;
}
console.log('');

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (i % 2 !== 0) {
        console.log(number);
    }
}
console.log('');

// 5. перебрати циклом while та вивести числа тільки парні значення
let i2 = 0;
while (i2 < numbers.length) {
    let number = numbers[i2];
    if (number % 2 === 0) {
        console.log(number);
    }
    i2++;
}
console.log('');

// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log('');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 3 === 0) {
        number = 'okten';
    }
    console.log(number);
}
console.log('');

// 8. вивести масив в зворотньому порядку.
let reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
console.log('');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати циклом while
let i3 = numbers.length - 1;
while (i3 >= 0) {
    let number = numbers[i3];
    i3--;
}

// перебрати циклом for
for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
}

// перебрати циклом while та вивести числа тільки з непарним індексом
let i4 = numbers.length - 1;
while (i4 >= 0) {
    let number = numbers[i4];
    if (i4 % 2 !== 0) {
        console.log(number);
    }
    i4--;
}
console.log('');

// перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if (i % 2 !== 0) {
        console.log(number);
    }
}
console.log('');

// перебрати циклом while та вивести числа тільки парні значення
let i5 = numbers.length - 1;
while (i5 >= 0) {
    let number = numbers[i5];
    if (number % 2 === 0) {
        console.log(number);
    }
    i5--;
}
console.log('');

// перебрати циклом for та вивести числа тільки парні значення
for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log('');

// замінити кожне число кратне 3 на слово "okten"
for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if (number % 3 === 0) {
        number = 'okten';
    }
    console.log(number);
}
