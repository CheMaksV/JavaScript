// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
let form = document.forms['f1'];
form.onsubmit = function (ev) {
    ev.preventDefault();
    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = form.age.value;
    let result = document.getElementsByClassName('result')[0];
    result.innerText = `Name: ${nameValue} Surname: ${surnameValue} Age: ${ageValue}`;
}


// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('number').innerText = currentNumber;
