async function foo() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json());

    console.log(users);
    console.log(posts);
}

foo();
