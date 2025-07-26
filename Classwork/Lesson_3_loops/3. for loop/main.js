// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<h3>${user.name} - ${user.age} - ${user.status}</h3>`);
// }


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:640/quality=value:75/01n1sh7CTRWsWeDTD2ZM'
    },
]; //DB

// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`<div class="target">
//                         <h2>${product.title} - ${product.price} UAH</h2>
//                         <img src="${product.image}" alt="">
//                   </div>`)
// }

for (let product of products) {
    document.write(`<div class="target">
                        <h2>${product.title} - ${product.price} UAH</h2>
                        <img src="${product.image}" alt="">
                  </div>`)

}
