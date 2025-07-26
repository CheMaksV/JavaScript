// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of arrN) {
    console.log(num);
}
console.log('');

// #GamKju89ob
// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arrST = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
for (let st of arrST) {
    console.log(st);
}
console.log('');

// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrALL = ['A', 'B', 1, 2, [1, 2, 3], {key: 'значення'}, true, false, null, NaN];
for (let all of arrALL) {
    console.log(all);
}
console.log('');

// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrALL1 = [1, 'A', true, 2, 'B', false, 3, 'C', true, 4];
for (let all1 of arrALL1) {
    if (typeof all1 === 'boolean') {
        console.log(all1);
    }
}
console.log('');

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrALL2 = [1, 'A', true, 2, 'B', false, 3, 'C', true, 4];
for (let all2 of arrALL2) {
    if (typeof all2 === 'number') {
        console.log(all2);
    }
}
console.log('');

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrALL3 = [1, 'A', true, 2, 'B', false, 3, 'C', true, 4];
for (let all3 of arrALL3) {
    if (typeof all3 === 'string') {
        console.log(all3);
    }
}
console.log('');

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let myArr = [];
myArr[0] = 'A';
myArr[1] = 1;
myArr[2] = [1, 2, 3];
myArr[3] = {key: 'значення'};
myArr[4] = true;
myArr[5] = false;
myArr[6] = undefined;
myArr[7] = null;
myArr[8] = NaN;
myArr[9] = BigInt(26494313634131);
for (let element of myArr) {
    console.log(element);
}
