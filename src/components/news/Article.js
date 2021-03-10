import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "../../axios"
import Comments from "./Comments"
import CreateComment from "./CreateComment"
import { Button, Card, Row, Container } from 'react-bootstrap';

class Article extends Component {

    constructor(props) {

        super(props)

        this.state = {
            loading: "Loading...",
            error: false,
            article: "",
            tags: [],
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
            this.setState({
                article: data.data,
                tags: data.data.tags,
                loading: null
            })
        }, (error) => {
            console.log(error);
            this.setState({
                error: true
            })
        });
    }

    render() {

        const { error, tags, article, comments, showComments, loading } = this.state;

        return (
            error ? <Redirect to="/somewhere/else" /> :
                <>
                    {loading}
                    <Container>
                        <Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.content}</Card.Text>
                                    {tags.map((tag, index) =>
                                        <Card.Link key={index} href="#">{tag}</Card.Link>
                                    )}
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
                            <CreateComment articleID={this.props.id} />
                        </Row>
                        <Row>
                            <Button href={`/news/${this.props.id}/edit`}>Edit Article</Button>
                        </Row>
                        <Row>
                            <Button href={`../news`} variant="primary" type="submit">Back</Button>
                        </Row>
                    </Container>
                </>
        )

    }

}

export default Article
