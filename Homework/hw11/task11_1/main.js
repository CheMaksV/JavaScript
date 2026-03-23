// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let cartsDiv = document.createElement('div');
cartsDiv.classList.add('carts');
fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((cartsObject) => {
        let {carts} = cartsObject;
        for (const cart of carts) {
            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');
            let cartInfo = document.createElement('div');
            cartInfo.classList.add('cart-info');
            cartInfo.innerText = `
                      id - ${cart.id},
                      total: ${cart.total},
                      discountedTotal: ${cart.discountedTotal},
                      userId: ${cart.userId},
                      totalProducts: ${cart.totalProducts},
                      totalQuantity: ${cart.totalQuantity}`;
            cartDiv.appendChild(cartInfo);
            let productsUl = document.createElement('ul');
            productsUl.classList.add('products-info');
            for (const product of cart.products) {
                let productLi = document.createElement('li');
                productLi.classList.add('product');
                let productInfo = document.createElement('p');
                productInfo.innerText = `
                      id - ${product.id},
                      title: ${product.title},
                      price: ${product.price},
                      quantity: ${product.quantity},
                      total: ${product.total},
                      discountPercentage: ${product.discountPercentage},
                      discountedTotal: ${product.discountedTotal}`;
                let productImg = document.createElement('img');
                productImg.src = product.thumbnail;
                productLi.append(productInfo, productImg);
                productsUl.appendChild(productLi);
                cartDiv.appendChild(productsUl);
            }

            cartsDiv.appendChild(cartDiv);
        }
    });
document.body.appendChild(cartsDiv);
