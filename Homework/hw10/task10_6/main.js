// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let kgInput = document.getElementById('kg');
let lbInput = document.getElementById('lb');
kgInput.oninput = () => {
    lbInput.value = +kgInput.value * 2.2046;
};
lbInput.oninput = () => {
    kgInput.value = +lbInput.value / 2.2046;
};
