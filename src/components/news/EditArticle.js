import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "../../axios"
import { Form, Container, Row, Button } from "react-bootstrap"
import { generatePath } from "react-router";



class EditArticle extends Component {

    constructor(props) {

        super(props)

        this.state = {
            error: false,
            article: "",
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

    componentDidMount() {
        axios.get(`/articles/${this.props.id}`).then(({ data }) => {
            this.setState({ article: data.data, loading: null })
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, content, tags } = this.state;

        axios.put(`/articles/${this.props.id}`, {
            title: title,
            content: content,
            tags: tags
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
            this.setState({
                error: true
            })
        });
    }

    render() {

        const { article, error } = this.state;

        return (
            error ? <Redirect to="/somewhere/else" /> :
                <>
                    <Container>
                        <Row>
                            <h1>Edit an Article</h1>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control onChange={this.handleTitle} defaultValue={article.title} type="text" placeholder="Enter a title" />
                                    <Form.Text className="text-muted">
                                        ＊Must be under 30 characters
                                </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formContent">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control onChange={this.handleContent} defaultValue={article.content} type="text" placeholder="Enter article content" />
                                    <Form.Text className="text-muted">
                                        ＊Must be under 200 characters
                                </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formTags">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control onChange={this.handleTags} defaultValue={article.tags} type="text" placeholder="Enter tags" />
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
                            <Button href={
                                generatePath("/news/:id", {
                                    id: this.props.id,
                                    entity: "posts"
                                })
                            } variant="primary" type="submit">Back</Button>
                        </Row>
                    </Container>
                </>
        )

    }

}

export default EditArticle
