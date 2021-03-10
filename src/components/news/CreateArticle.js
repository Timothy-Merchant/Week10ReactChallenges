import { Component } from 'react'
import axios from "../../axios"
import { Form, Container, Row, Button } from "react-bootstrap"

class CreateArticle extends Component {

    constructor(props) {

        super(props)

        this.state = {
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
        const handledTags = e.currentTarget.value.split(/\s*,\s*/);
        this.setState({ tags: handledTags });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags
        }).then((response) => {
            console.log(response);            
        });
    }

        render() {

            return (
                <>
                    <Container>
                        <Row>
                            <h1>Create an Article</h1>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control onChange={this.handleTitle} type="text" placeholder="Enter a title" />
                                    <Form.Text className="text-muted">
                                        ＊Must be under 30 characters
                                </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formContent">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control onChange={this.handleContent} type="text" placeholder="Enter article content" />
                                    <Form.Text className="text-muted">
                                        ＊Must be under 200 characters
                                </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formTags">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control onChange={this.handleTags} type="text" placeholder="Enter tags" />
                                    <Form.Text className="text-muted">
                                        ＊Please submit tags with a comma and space between each.
                                </Form.Text>
                                </Form.Group>
                                <Button variant="primary" onClick={this.handleSubmit}>
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
