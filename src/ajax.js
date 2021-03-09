// import axios with configuration
import axios from "./axios";

// ...challenges here

// 1
axios.get("/articles").then(({ data }) => {
    console.log(data);
});