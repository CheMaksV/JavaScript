let target = document.getElementById('target');
console.log(target.innerText);
// target.innerText = 'okten';
target.style.background = 'silver';
console.log(target.classList);
target.classList.add('foo');
target.classList.add('bar');
console.log(target.classList.item(0));
console.log(target.classList.contains('bar'));
console.log('');
// target.classList.toggle(); // перемикач

console.log(target.getAttribute('xxx'));
console.log(target.getAttribute('id'));
console.log(target.getAttribute('class'));
console.log(target.getAttribute('style'));
console.log('');

// target.setAttribute('id', 'qwe');

console.log(target.previousElementSibling);
console.log(target.nextElementSibling);
console.log(target.children); // HTML
console.log(target.childNodes); //Node
console.log('');

// target.innerHTML = '<b>Hello!</b>';
console.log(target.outerHTML);

let collectionOfDiv = document.getElementsByClassName('point');
for (let divElement of collectionOfDiv) {
    divElement.innerText = 'HHHHH';
    divElement.classList.add('qqq');
}
