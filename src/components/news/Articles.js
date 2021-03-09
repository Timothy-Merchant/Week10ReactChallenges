import { Component } from 'react'
import axios from "../../axios"
import { Container, Row, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

class Articles extends Component {

    constructor(props) {

        super(props)

        this.state = {
            articles: "",
            id: 0
        }

        this.handleId = this.handleId.bind(this);

    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({ articles: data.data })
        })

    }

    handleId(e) {
        this.setState({ id: e.currentTarget.value });
    }

    render() {

        const articles = this.state.articles;
        const id = this.state.id;

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
                            <input type="number" onChange={this.handleId}></input>
                        </Row>
                        <Row>
                            <Link to={`news/${id}`}>Look up an article</Link>
                        </Row>
                    </Container>
                </>
        )

    }

}

export default Articles
