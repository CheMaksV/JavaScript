// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push({id: i + 1});
}

let start = 0;
const limit = 10;
let list = document.getElementById('list');

function show() {
    list.innerText = '';
    for (let i = start; i < start + limit && i < arr.length; i++) {
        let div = document.createElement('div');
        div.innerText = arr[i].id;
        list.appendChild(div);
    }
}

show();

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

nextButton.onclick = () => {
    if (start + limit < arr.length) {
        start += limit;
        show();
    }
}

prevButton.onclick = () => {
    if (start - limit >= 0) {
        start -= limit;
        show();
    }
}
