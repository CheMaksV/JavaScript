// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let table = document.createElement('table');
let button = document.querySelector('button');
button.onclick = () => {
    table.innerText = '';
    let linesValue = +document.getElementById('lines').value;
    let cellsValue = +document.getElementById('cells').value;
    let contentsValue = document.getElementById('contents').value;
    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let i = 0; i < cellsValue; i++) {
            const td = document.createElement('td');
            td.innerText = contentsValue;
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);
}
