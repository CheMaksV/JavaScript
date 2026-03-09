let target = document.getElementById('target');
target.onclick = function (ev) {
    console.log('click');
    console.log(ev);
}

// target.onmousemove = function (ev) {
//     console.log('move');
//     console.log(ev.clientX, ev.clientY);
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r},${g},${b})`;
// }

/*
target.onclick = function () {
    console.log('qweasd');
};
*/

target.addEventListener('click', function (ev) { //Безліч івентів
    console.log('qweasd');
    console.log(ev);
})

target.onmouseover = function () {
    console.log('over');
}

target.onmouseleave = function () {
    console.log('leave');
}
//_______________________________________________________________________________________________________//

let i1 = document.getElementById('i1');
i1.oninput = function () {
    console.log(this.value);
    target.innerText = this.value;
}

let f1 = document.forms.f1;
f1.onsubmit = function (ev) {
    ev.preventDefault();
    console.log('hello');
    let user = {name: this.username.value};
    console.log(user); // ls fetch api
}
//_______________________________________________________________________________________________________//

window.onload = function () {
    console.log('load');
}

// document.onreadystatechange = function () {
//     console.log(document.readyState);
//     if (document.readyState === 'interactive') {
//         document.body.innerText = 'loading ...';
//     }
//     if (document.readyState === 'complete') {
//         document.body.innerText = 'loading complete';
//     }
// }
