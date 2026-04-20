import axios from "https://esm.sh/axios";
import urls from "./urls.js";

let axiosObject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
});

let users = axiosObject.get(urls.users);
console.log(users);

users.then(response => {
    console.log(response.data);
})
