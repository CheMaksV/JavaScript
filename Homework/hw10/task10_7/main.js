// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, яка дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('no array');
    }

    let arr = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage('sessionsList', {});

