import { Component } from 'react'
import axios from "../../axios"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

class Articles extends Component {

    constructor(props) {

        super(props)

        this.state = {
            articles: "",
            id: 0 
        }

        this.handleId = this.handleId.bind(this);

    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({ articles: data.data })
        })

    }

    handleId(e) {
        this.setState({ id: e.currentTarget.value });
    }

    render() {

        const articles = this.state.articles;
        const id = this.state.id;

        return (

            articles === "" ? "Loading..." :
                <>
                    <h1>Blog</h1>
                    {
                        articles.map((article, index) => (

                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.content}</Card.Text>
                                    {article.tags.map((tag, index) => (
                                        <Card.Link key={index} href="#">{tag}</Card.Link>
                                    ))}
                                </Card.Body>
                            </Card>

                        ))
                    }
                    <input type="number" onChange={this.handleId}></input>
                    <Link to={`news/${id}`}>Look up an article</Link>
                </>
        )

    }

}

export default Articles
