import { Component } from 'react'
import axios from "../../axios"
import Card from "react-bootstrap/Card";

class Comments extends Component {

    constructor(props) {

        super(props)

        this.state = {
            comments: "",
        }

    }

    componentDidMount() {
        axios.get(`/articles/${this.props.articleID}/comments`).then(({ data }) => {
            this.setState({ comments: data.data })
        })

    }

    render() {
        const comments = Array.from(this.state.comments);

        console.log(comments);

        return (
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
