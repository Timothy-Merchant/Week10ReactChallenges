import { Component } from 'react'
import axios from "../../axios"
import Comments from "./Comments"
import { Button, Card, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

class Article extends Component {

    constructor(props) {

        super(props)

        this.state = {
            article: "",
            comments: "",
            showComments: false
        }

        this.toggleComments = this.toggleComments.bind(this);
    }


    toggleComments() {
        this.setState({
            showComments: this.state.showComments ? false : true
        })
    }

    componentDidMount() {

        axios.get(`/articles/${this.props.id}`).then(({ data }) => {
            this.setState({ article: data.data })
        })

        axios.get(`/articles/${this.props.id}/comments`).then(({ data }) => {
            this.setState({ comments: data.data })
        })
    }

    render() {

        const { article, comments, showComments } = this.state;

        return (
            article === "" ? "Loading..." :
                <>
                    <Container>
                        <Row>
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
                        <Row>
                            <Button onClick={this.toggleComments}>Show Comments</Button>
                        </Row>
                        <Row>
                            {showComments ? <Comments articleID={this.props.id} comments={comments} /> : null}
                        </Row>
                        <Row>
                            <Link to="../news">Back</Link>
                        </Row>
                    </Container>
                </>
        )

    }

}

export default Article
