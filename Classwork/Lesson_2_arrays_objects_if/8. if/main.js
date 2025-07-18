// let color = 'green';
// if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('go!');
// }

// let age = +prompt('enter your age');
// console.log(age, typeof age);
// if (age >= 18) {
//     console.log('adult');
// } else {
//     console.log('cartoon');
// }

// let color = prompt('enter color!');
// // if (color === 'green') {
// //     if (confirm('is road clear?')) {
// //         console.log('go');
// //     } else {
// //         console.log('just wait');
// //     }
// // } else if (color === 'yellow') {
// //     console.log('wait');
// // } else if (color === 'red') {
// //     console.log('stop');
// // } else {
// //     console.log('???????');
// // }

let color = prompt('enter color!');
let isRoadClear = confirm('is road clear?');
if (color === 'green' && isRoadClear) {
    console.log('go');
} else if (color === 'yellow') {
    console.log('wait');
} else if (color === 'red') {
    console.log('stop');
} else {
    console.log('???????');
}
