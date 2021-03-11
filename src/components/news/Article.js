import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../axios"
import Comments from "./Comments"
import CreateComment from "./CreateComment"
import { Button, Card, Row, Container } from 'react-bootstrap';
import FourOhFour from './FourOhFour'

class Article extends Component {

    constructor(props) {

        super(props)

        this.state = {
            loading: true,
            error: false,
            article: {},
            showComments: false
        }

        this.toggleComments = this.toggleComments.bind(this);
    }


    toggleComments() {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    componentDidMount() {
        axios.get(`/articles/${this.props.id}`).then(({ data }) => {
            this.setState({
                article: data.data,
                loading: false
            })
        }, (error) => {
            this.setState({
                error: true
            })
        });
    }

    render() {

        const { error, article, showComments, loading } = this.state;

        return (
            error ? <FourOhFour /> :
                <>
                    {loading ? <p>Loading...</p> : (
                        <Container>
                            <Row>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{article.title}</Card.Title>
                                        <Card.Text>{article.content}</Card.Text>
                                        {article.tags.map((tag, index) =>
                                            <Card.Link key={index} href="#">{tag}</Card.Link>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Button onClick={this.toggleComments}>Show Comments</Button>
                            </Row>
                            <Row>
                                {showComments ? <Comments articleID={this.props.id} /> : null}
                            </Row>
                            <Row>
                                <CreateComment articleID={this.props.id} />
                            </Row>
                            <Row>
                                <Link to={`/news/${this.props.id}/edit`}>
                                    <Button>Edit Article</Button>
                                </Link>
                            </Row>
                            <Row>
                                <Button href={`../news`} variant="primary" type="submit">Back</Button>
                            </Row>
                        </Container>
                    )}
                </>
        )

    }

}

export default Article
