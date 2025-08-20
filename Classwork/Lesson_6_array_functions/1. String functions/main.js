let str = 'hello okten !!!';
console.log(str);
console.log(str[0]);
// for (let strElement of str) {
//     console.log(strElement);
// }
//
// let s = new String('qweasd');
// console.log(s);

let s = str.concat('!!!');
console.log(s);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('he'));
console.log(str.endsWith('en'));
console.log(str.substring(0, 7));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
console.log(str.indexOf('o', 5));
console.log(str.charAt(8));
// console.log(str.replace('e', '!'));
console.log(str.replaceAll('e', '!'));
let split = str.split(' ');
console.log(split);
