import { Component } from 'react'
import axios from "../../axios"
import { Form, Container, Row, Button } from "react-bootstrap"

class CreateComment extends Component {

    constructor(props) {

        super(props)

        this.state = {
            error: false,
            errors: [],
            email: "",
            comment: ""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleComment(e) {
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, comment } = this.state;

        axios.post(`/articles/${this.props.articleID}/comments`, {
            email: email,
            comment: comment
        }).then((response) => {
            console.log(response);
        }, (error) => {
            this.setState({
                error: true,
                errors: error.response.data.errors                
            });
            console.log(this.state.errors);
        });
    }

    render() {

        const { error, errors } = this.state;

        return (
            <>
                <Container>
                    <Row>
                        <h3>Create a Comment</h3>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value="" onChange={this.handleEmail} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    {error ? errors["email"] : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formContent">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control onChange={this.handleComment} type="text" placeholder="Enter comment" />
                                <Form.Text className="text-muted">
                                    {error ? errors["comment"] : null}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </>
        )

    }

}

export default CreateComment
