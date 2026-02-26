// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

function deepCopy(obj) {
    debugger
    if (obj) {
        let functions = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (let func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        return cloneObj;
    }
    throw new Error('!!!');
}

let deepCopy1 = deepCopy({ id: 1, name: 'vasya', greeting() {console.log('hi!')}, foo () {console.log('qwe')}});
console.log(deepCopy1);
deepCopy1.foo();
