// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
// ------------------
//
// Створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

for (const course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.style.height = '300px';
    courseDiv.style.display = 'grid';
    courseDiv.style.gridTemplateRows = '1fr 1fr 1fr';
    courseDiv.style.gridTemplateColumns = '1fr 1fr';
    courseDiv.style.gridTemplateAreas = '"title title" "monthDuration hourDuration" "modules modules"';

    let titleDiv = document.createElement('div');
    titleDiv.innerText = course.title;
    titleDiv.style.gridArea = 'title';
    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.innerText = course.monthDuration;
    monthDurationDiv.style.gridArea = 'monthDuration';
    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.innerText = course.hourDuration;
    hourDurationDiv.style.gridArea = 'hourDuration';
    let modulesDiv = document.createElement('div');
    modulesDiv.style.gridArea = 'modules';
    let moduleUl = document.createElement('ul');

    for (const module of course.modules) {
        let moduleLi = document.createElement('li');
        moduleLi.innerText = module;
        moduleUl.appendChild(moduleLi);
        modulesDiv.appendChild(moduleUl);
    }

    courseDiv.append(titleDiv, monthDurationDiv, hourDurationDiv, modulesDiv);
    document.body.appendChild(courseDiv);
}

