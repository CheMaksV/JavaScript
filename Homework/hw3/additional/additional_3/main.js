// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body>
// <!--template 1.1-->
// <div class="wrap">
//     <div class="post-card">
//         <h3>ID - TITLE</h3>
//         <p>BODY</p>
//     </div>
//
//     <!--
//     ...
//     ...
//     ...
//     other posts
//     -->
//
// </div>
//
//
// <script>
//     /*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.
//     * ЗА допомоги стилів побудувати структуру "сітки" по 5 об'єктів в лінію
//     * */
// </script>
// </body>
// </html>

document.write(`<div class="wrap">`)
for (let userPost of usersPosts) {
    document.write(`
                    <div class="post-card">
                        <h3>${userPost.id} - ${userPost.title}</h3>
                        <p>${userPost.body}</p>
                    </div>
                  `)
}
document.write(`</div>`)
