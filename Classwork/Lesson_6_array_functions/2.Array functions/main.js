let arr = [];
console.log(Array.isArray(arr));
// arr[arr.length] = 100;
console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

// let str = '';
// for (let arrElement of arr) {
//     str += arrElement + ';';
// }
// console.log(str);

let join = arr.join(';');
console.log(join);

let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);
console.log(arr);

console.log(nums.reverse());

console.log(concat);
let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

// let splice = concat.splice(0, 2, '!!!', 'qweasd', '!@#$%');
// console.log(splice);
// console.log(concat);

console.log(concat.indexOf(11));
concat.splice(concat.indexOf(11), 1); // (4, 1)
console.log(concat);

console.log(concat.includes(22));
console.log('hello okten'.includes('ok'));
