// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('ann', 21, 31),
    new Cinderella('amm', 22, 32),
    new Cinderella('liz', 24, 33),
    new Cinderella('maggy', 23, 34),
    new Cinderella('andrea', 28, 35),
    new Cinderella('sofi', 29, 36),
    new Cinderella('luci', 33, 37),
    new Cinderella('monica', 32, 38),
    new Cinderella('mon', 26, 39),
    new Cinderella('alice', 40, 40),
];

class Prince {
    constructor(name, age, heelShoe) {
        this.name = name;
        this.age = age;
        this.heelShoe = heelShoe;
    }
}

const prince = new Prince('john', 38, 36);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.heelShoe) {
        prince.wife = cinderella;
    }
}

console.log(prince.wife);

const cinderellaFind = cinderellas.find(cinderella => cinderella.footSize === prince.heelShoe);
console.log(cinderellaFind);
