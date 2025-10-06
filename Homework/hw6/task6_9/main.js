// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let filterSass = coursesArray.filter(course => {
    return course.modules.includes('sass');
});
console.log(filterSass);
let filterDocker = coursesArray.filter(course => {
    return course.modules.includes('docker');
});
console.log(filterDocker);
