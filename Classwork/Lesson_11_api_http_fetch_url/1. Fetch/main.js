// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => {
//         for (const {name, username} of json) {
//             document.write(`<div>
//                 ${name} ${username}
//             </div>`);
//         }
//     });

// fetch('https://dummyjson.com/products?limit=3')
//     .then((response) => response.json())
//     .then((res) => {
//         console.log(res);
//         let {products} = res;
//         document.write(`<div>`);
//         for (const product of products) {
//             document.write(`<div>`);
//             document.write(`<p>${product.brand} - ${product.price}</p>`);
//             document.write(`<img src="${product.thumbnail}" alt="">`);
//             document.write(`</div>`);
//         }
//         document.write(`</div>`);
//     });

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        title: 'BMW Pencil',
    })
})
    .then(res => res.json())
    .then(console.log);

/*---------------------------------------------------------------------------------------------------------*/

console.log('start');
                        fetch('https://dummyjson.com/users', {})
                            .then((response) => response.json())
                            .then((value) => {
                                let btn = document.createElement('button');
                                btn.setAttribute('class', 'btn btn-success');
                                btn.textContent = 'do';
                                document.body.appendChild(btn);
                            });
console.log('end');

let btn = document.getElementsByClassName('btn-success')[0];

