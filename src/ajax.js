// import axios with configuration
// import axios from "./components/news/axios";

// ...challenges here

// 1
// axios.get("/articles").then(({ data }) => {
//     console.log(data);
// });

// 2
// axios.post("/articles", {
//     title: "Ajax challenge 02",
//     content: "now we're using ajax",
//     tags: ["A", "J", "A", "X"]
// });

// 3
// axios.get("/articles/15").then(({data}) => {
//     console.log(data);
// })

// 4
// axios.patch("/articles/15", {
//     tags: ["spoons", "science", "spoon truther"]
// }).then((response) => {
//     console.log(response);
// }, (error) => {
//     console.log(error);
// });

// 5
// axios.delete("/articles/38").then((response) => {
//     console.log(response);
// })

// 6
// axios.post("/articles/37/comments", {
//     email: "ajax@ajax.com",
//     comment: "Hello world"
// }).then(({ data }) => {
//     console.log(data.data.id);
//     console.log(data.data.comment);
// })

// 7
// axios.get("/articles/37/comments").then(({ data }) => {
//     console.log(data.data);
// })

// 8
// axios.get("/tags").then(({data}) => console.log(data.data));

// Tricksy 1

// Tricksy 2
// axios.get("/articles").then(({ data }) => {
//     let titles = data.data.map((article) => article.title)
//     console.log(titles);
// })