import { Component } from 'react'
// import axios from "../../axios"
import { Form, Container, Row, Button } from "react-bootstrap"

class CreateArticle extends Component {

    constructor(props) {

        super(props)

        this.state = {
            articles: "",
            id: 0
        }

        this.handleId = this.handleId.bind(this);

    }

    // componentDidMount() {
    //     axios.get("/articles").then(({ data }) => {
    //         this.setState({ articles: data.data })
    //     })  
    // }

    handleId(e) {
        this.setState({ id: e.currentTarget.value });
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
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
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
