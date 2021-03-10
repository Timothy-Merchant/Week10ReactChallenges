import { Component } from 'react'
import axios from "../../axios"
import { Form, Container, Row, Button } from "react-bootstrap"

class CreateArticle extends Component {

    constructor(props) {

        super(props)

        this.state = {
            error: false,
            errors: [],
            title: "",
            content: "",
            tags: "",
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleTags(e) {        
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(/\s*,\s*/)
        }).then((response) => {
            console.log(response);
        }, (error) => {
            this.setState({
                error: true,
                errors: error.response.data.errors
            });
            console.log(this.state.errors);
        });
    };

    render() {

        const { error, errors } = this.state;

        return (
            <>
                <Container>
                    <Row>
                        <h1>Create an Article</h1>
                    </Row>
                    <Row>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={this.handleTitle} type="text" placeholder="Enter a title" />
                                <Form.Text className="text-muted">
                                    {error ? errors["title"] : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control onChange={this.handleContent} type="text" placeholder="Enter article content" />
                                <Form.Text className="text-muted">
                                    {error ? errors["content"] : null}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control onChange={this.handleTags} type="text" placeholder="Enter tags" />
                                <Form.Text className="text-muted">
                                    {error ? errors["tags"] : null}
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Row>
                    <Row>
                        <Button href="../news" variant="primary" type="submit">Back</Button>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CreateArticle
