import { Component } from 'react'
import axios from "../../axios"

class Articles extends Component {

    constructor(props) {

        super(props)

        this.state = {

        }

    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            console.log(data);
        })
    }

    render() {
        return "hello world"
    }

}

export default Articles
