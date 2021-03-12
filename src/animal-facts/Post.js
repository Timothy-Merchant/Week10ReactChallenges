import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "../axios";

const Post = () => {

    let [animalfact, setAnimalfact] = useState({
        fact: "",
        made_up: false,
        submitted: false
    });

    const handleFactChange = (e) => {
        setAnimalfact({
            ...animalfact,
            fact: e.currentTarget.value
        });
    }
    const handleTrueChange = (e) => {
        setAnimalfact({
            ...animalfact,
            made_up: !animalfact.made_up
        });
    }

    const handleBack = () => {
        setAnimalfact({ fact: "", made_up: false, submitted: false })
    }

    const handleSubmit = () => {
        setAnimalfact({ ...animalfact, submitted: true })

        axios.post("/animal-facts", {
            fact: animalfact.fact,
            made_up: animalfact.made_up
        });
    }

    return (
        <>
            <h3>Post</h3>
            <Card
                bg={"primary"}
                text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Animal Facts</Card.Header>
                <Card.Body>
                    {animalfact.submitted ?
                        <>
                            <Card.Title>Thanks!</Card.Title>
                            <Button onClick={handleBack} variant="danger" type="submit">Go Back</Button>
                        </> :
                        <>
                            <Card.Title>Add your own animal fact here:</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control value={animalfact.fact} onChange={handleFactChange} type="text" placeholder="Your animal fact here..." />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Made up fact?" onChange={handleTrueChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="danger" type="submit">Submit New Fact</Button>
                                </Form.Group>
                            </Form>
                        </>
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default Post;