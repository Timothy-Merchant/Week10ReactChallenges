import Card from "react-bootstrap/Card";

const Comments = ({ comments }) => {

    console.log(comments);

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

export default Comments
