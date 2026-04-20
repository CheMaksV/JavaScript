import {getUsers, getUser, getPosts} from "./api.js";

getUsers().then((res) => {
    console.log(res.data)
});

getUser(7).then((res) => {
    console.log(res.data);
});

