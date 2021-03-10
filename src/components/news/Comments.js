import { Component } from 'react'
import Card from "react-bootstrap/Card";
import axios from "../../axios"

class Comments extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: ""
        }
    }


    componentDidMount() {
        axios.get(`/articles/${this.props.articleID}/comments`).then(({ data }) => {
            this.setState({ comments: data.data })
        })
    }

    render() {

        const { comments } = this.state;
        return (
            comments.length === 0 ? "No Comments" :
                <>
                    {comments.map((comment, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{comment.email}</Card.Title>
                                <Card.Text>{comment.comment}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </>
        )
    }

}

export default Comments
