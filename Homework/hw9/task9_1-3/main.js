// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'yellow';
div.style.color = 'lightblue';
div.style.fontSize = '20px';
document.body.appendChild(div);
let cloneNodeDiv = div.cloneNode(true);
document.body.appendChild(cloneNodeDiv);


//     #OPLI89c9G
// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let menu = document.createElement('ul');
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);


// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let courseDiv = document.createElement('div');
    courseDiv.innerText = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(courseDiv);
}
