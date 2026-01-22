// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, producer, yearOfRelease, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfRelease = yearOfRelease;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear) {
        if (newYear > 1800) this.yearOfRelease = newYear;
    };
    this.addDriver = function (driverObject) {
        if (driverObject) this.driver = driverObject;
    };
}

let car = new Car('Tesla', 'Tesla Motors', 2012, 250, 8);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2015);
car.addDriver({name: 'vasya', age: 25});
console.log(car);
