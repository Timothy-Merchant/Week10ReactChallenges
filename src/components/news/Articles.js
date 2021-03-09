import { Component } from 'react'
import axios from "../../axios"
import Card from "react-bootstrap/Card";

class Articles extends Component {

    constructor(props) {

        super(props)

        this.state = {
            articles: []
        }

    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({ articles: data.data })
        })
    }

    render() {

        const articles = this.state.articles;

        return (
            <>
                <h1>Blog</h1>
                {
                    articles.map((article, index) => (

                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.content}</Card.Text>
                                {article.tags.map((tag, index) => (
                                    <Card.Link key={index} href="#">{tag}</Card.Link>
                                ))}
                            </Card.Body>
                        </Card>

                    ))
                }
            </>
        )

    }

}

export default Articles
