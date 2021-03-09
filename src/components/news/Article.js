import { Component } from 'react'
import axios from "../../axios"
import Card from "react-bootstrap/Card";
import Comments from "./Comments"
import { Button } from 'react-bootstrap';

class Article extends Component {

    constructor(props) {

        super(props)

        this.state = {
            article: "",
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
    }

    render() {

        const { article, showComments } = this.state;

        return (
            article === "" ? "Loading..." :
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>{article.content}</Card.Text>
                            {article.tags.map((tag, index) => (
                                <Card.Link key={index} href="#">{tag}</Card.Link>
                            ))}
                        </Card.Body>
                    </Card>

                    <Button onClick={this.toggleComments}>Show Comments</Button>
                    {showComments ? <Comments articleID={this.props.id} /> : null}
                </>
        )

    }

}

export default Article
