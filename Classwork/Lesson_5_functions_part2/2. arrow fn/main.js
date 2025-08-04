// function calc(a, b) {
//     return a + b;
// }

let calc = (a, b) => /*return*/ a + b;
console.log(calc(10, 20));

// let asd = () => console.log('hi');
// console.log(asd());

let asd = function () {
    console.log('hi');
    return undefined;
}
console.log(asd());

let qwe = () => console.log(arguments);
console.log(qwe('ASD'));

