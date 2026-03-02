//DOM
/*
console.log(document);
console.log(document.head);
console.log(document.head.children);
console.log(document.head.innerHTML);
console.log(document.body);
console.log(document.body.innerHTML);
*/

//ID
let ul1 = document.getElementById('list-1');
console.log(ul1);

//CLASS
let menuCollection = document.getElementsByClassName('menu');
console.log(menuCollection);
for (const menuCollectionElement of menuCollection) {
    console.log(menuCollectionElement);
}

//TAG
let liList = document.getElementsByTagName('li');
console.log(liList);
// _________________________________________________________________________________________________ //

let list1 = document.getElementById('list-1');
let list1LiCollection = list1.getElementsByTagName('li');
console.log(list1LiCollection);


// _____________________________________________ querySelector ____________________________________________________ //
console.log('');

console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('ul'));
console.log(document.querySelector('body .menu'));
console.log(document.querySelectorAll('body .menu'));
console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
let nodeListOF = document.querySelectorAll('#list-2 li');
console.log(nodeListOF);
for (const node of nodeListOF) {
    console.log(node);
}
