// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.querySelector('button');
button.onclick = function () {
    // document.getElementById('text').remove();
    document.getElementById('text').style.display = 'none';
};


// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let button2 = document.getElementById('button2');
button2.onclick = function () {
    let age = document.getElementById('age').value;
    let result = document.getElementById('result');
    if (age === '') {
        result.innerText = 'Будь ласка, введіть вік';
        return;
    }

    if (age < 18) {
        result.innerText = 'Вам менше 18 років';
    } else {
        result.innerText = 'Вам 18 або більше  років';
    }
}
