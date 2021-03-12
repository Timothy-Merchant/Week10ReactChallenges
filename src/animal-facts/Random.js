import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "../axios";

const Random = () => {

    let [animalfact, setAnimalfact] = useState({});    

    const handleClick = () => {
        axios.get("/animal-facts/random").then(({ data }) => {
            console.log(data);

            setAnimalfact({
                fact: data.data.fact,
                made_up: data.data.made_up,
                by: data.data.by
            })
        })
    }



    return (
        <>
            <h3>Random</h3>
            <Card
                // danger
                bg={animalfact.made_up ? "danger" : "primary"}                
                text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{"Info"} {animalfact.by} </Card.Title>
                    <Card.Text>
                        {animalfact.fact}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button onClick={handleClick}>New Fact</Button>

        </>
    );
}

export default Random;