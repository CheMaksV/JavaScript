let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);
url.searchParams.set('asd', 'qwe');
console.log(url.searchParams.get('asd'));

fetch(url)
    .then((response) => response.json())
    .then((value) => {
        console.log(value);
    });
