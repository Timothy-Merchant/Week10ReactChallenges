import { Component } from 'react'
import axios from "../../axios"
import { Container, Row, Card, Button } from "react-bootstrap"

class Articles extends Component {

    constructor(props) {

        super(props)

        this.state = {
            articles: "",
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({ articles: data.data.length === 0 ? "No Articles" : data.data })
        })
    }

    render() {

        const articles = this.state.articles;

        return (

            articles === "" ? "Loading..." :
                <>
                    <Container>
                        <Row>
                            <h1>Blog</h1>
                        </Row>
                        {
                            articles.map((article, index) => (
                                <Row key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Link href={`/news/${article.id}`}>To Article</Card.Link>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>{article.content}</Card.Text>
                                            {article.tags.map((tag, index) => (
                                                <Card.Link key={index} href="#">{tag}</Card.Link>
                                            ))}
                                        </Card.Body>

                                    </Card>
                                </Row>

                            ))
                        }
                        <Row>
                            <Button href={`/news/create`} variant="primary" type="submit">Create Article</Button>
                        </Row>
                    </Container>
                </>
        )

    }

}

export default Articles
