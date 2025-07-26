// #y7crMeFwHcS
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>qweasdzxc</div>`);
}


// #TYj7ncx
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    // document.write(`<div>qweasdzxc ` + i + `</div>`);
    document.write(`<div>qweasdzxc ${i}</div>`);
}


// #uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let w = 0;
while (w < 20) {
    document.write(`<h1>Okten</h1>`);
    w++;
}


// #OeT7t3uUMFi
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let w1 = 0;
while (w1 < 20) {
    // document.write(`<h1>Okten ` + w1 + `</h1>`);
    document.write(`<h1>Okten ${w1}</h1>`);
    w1++;
}



