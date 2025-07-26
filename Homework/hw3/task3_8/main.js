// За допомогою циклу вивести всю інформацію про користувачів, використовуючи шаблон
//
// <div class="users-box">
//     <div class="user-block">
//         <h2>ID - NAME - USERNAME </h2>
//         <h3>EMAIL - PHONE</h3>
//         <div class="address-block">
//             <p>City - ADDRESS.CITY</p>
//             <p>Street - ADDRESS.STREET</p>
//             <p>Suite - ADDRESS.SUITE</p>
//             <p>Zip code - ADDRESS.ZIPCODE</p>
//         </div>
//     </div>
//
//     <!--
//
//     ...
//     ...
//     ...
//     other users
//
//     -->
//
//
// </div>
//
// за допомогою стилів, побудувати сітку по 2 об’єктах в рядок

document.write(`<div class="users-box">`)
    for (let user of usersList) {
        document.write(`<div class="user-block">
                    <h2>${user.id} - ${user.name} - ${user.username} </h2>
                    <h3>${user.email} - ${user.phone}</h3>
                <div class="address-block">
                    <p>City - ${user.address.city}</p>
                    <p>Street - ${user.address.street}</p>
                    <p>Suite - ${user.address.suite}</p>
                    <p>Zip code - ${user.address.zipcode}</p>
                </div>
            </div>`)
    }
document.write(`</div>`)
