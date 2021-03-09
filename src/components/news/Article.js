import { Component } from 'react'
import axios from "../../axios"
import Card from "react-bootstrap/Card";

class Article extends Component {

    constructor(props) {

        super(props)

        this.state = {
            article: ""
        }

    }

    componentDidMount() {
        axios.get(`/articles/${this.props.id}`).then(({ data }) => {
            this.setState({ article: data.data })
        })
    }

    render() {

        const article = this.state.article;

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
                </>
        )

    }

}

export default Article
