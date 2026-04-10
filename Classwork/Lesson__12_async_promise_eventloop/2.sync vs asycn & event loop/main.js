// console.log('start');
//
// setTimeout(function () {
//     console.log('done');
// }, 1000);
//
// console.log('end');

// console.log('start');
//
// setTimeout(function () {
//     console.log('hi');
// }, 1000);
//
// setTimeout(function () {
//     console.log('hello');
// }, 200);
//
// console.log('end');


// setTimeout(function () {
//     console.log('hi 1');
//     setTimeout(function () {
//         console.log('hi 2');
//         setTimeout(function () {
//             console.log('hi 3');
//             setTimeout(function () {
//                 console.log('hi 4');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//
//
// let x = 1;
// setTimeout(function () {
//     x = 1000;
// }, 1000);
//
// console.log(x);


// console.log('log1');
//
// setTimeout(() => {
//     console.log('asd');
// }, 2000);
//
// console.log('log2');
//
// setTimeout(() => {
//     console.log('qwe');
// }, 1000);
//
// console.log('log3');
//
// let x = 0;
// setTimeout(() => {
//     x = 100500;
// }, 1000);
// console.log(0);


let i = 0;
while (i < 5) {
    run(i);
    i++;
}

function run(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
