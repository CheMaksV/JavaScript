// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори, жанри).
let books = [
    {name: 'Кувала зозуля', numPages: 511, authors: ['Роберт Галбрейт'], genres: ['детектив']},
    {name: 'Таємна історія', numPages: 555, authors: ['Донна Тартт'], genres: ['психологічний реалізм', 'детектив', 'драма']},
    {name: 'Сага', numPages: 176, authors: ['Брайан К. Вон', 'Фіона Стейплз'], genres: ['фентезі', 'пригоди', 'драма', 'горор', 'трилер']},
    {name: 'Правила будинку сидру', numPages: 637, authors: ['Джон Ірвінг'], genres: ['соціальна драма']},
    {name: 'Жизнєнні історії', numPages: 255, authors: ['Софія Мокій'], genres: ['фікшн']}
];
// - знайти найбільшу книжку.
let maxPagesBook = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].numPages > maxPagesBook.numPages) {
        maxPagesBook = books[i];
    }
}
console.log(maxPagesBook);
console.log('');


// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenresBooks = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > maxGenresBooks) {
        maxGenresBooks = books[i].genres.length;
    }
}
let result = [];
let index = 0
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length === maxGenresBooks) {
        result[index] = books[i];
        index++;
    }
}
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
console.log('');


// - знайти книжку/ки з найдовшою назвою
let maxNameBooks = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].name.length > maxNameBooks) {
        maxNameBooks = books[i].name.length;
    }
}
let resultMaxNameBooks = [];
let il = 0
for (let i = 0; i < books.length; i++) {
    if (books[i].name.length === maxNameBooks) {
        resultMaxNameBooks[il] = books[i];
        il++;
    }
}
for (let i = 0; i < resultMaxNameBooks.length; i++) {
    console.log(resultMaxNameBooks[i]);
}
console.log('');


// - знайти книжку/ки які писали 2 автори
let twoAuthorBooks = [];
let ind = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        twoAuthorBooks[ind] = books[i];
        ind++;
    }
}
for (let i = 0; i < twoAuthorBooks.length; i++) {
    console.log(twoAuthorBooks[i]);
}
console.log('');


// - знайти книжку/ки які писав 1 автор
let oneAuthorBooks = [];
let id = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        oneAuthorBooks[id] = books[i];
        id++;
    }
}
for (let i = 0; i < oneAuthorBooks.length; i++) {
    console.log(oneAuthorBooks[i]);
}
