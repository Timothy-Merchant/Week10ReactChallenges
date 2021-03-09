// import axios with configuration
import axios from "./axios";

// ...challenges here

// 1
axios.get("/articles").then(({ data }) => {
    console.log(data);
});

// 2
axios.post("/articles", {
    title: "Ajax challenge 02",
    content: "now we're using ajax",
    tags: ["A", "J", "A", "X"]
});