import { Component } from "react";
import Form from "./Form";
import Item from "./Item";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.setState({ items: this.state.items.concat([values]) });
    }

    render() {
        let { items } = this.state;

        return (
            <div>
                <h2>Posts</h2>
                <div className="list-group">
                    {items.length ? items.map(({ title, text }, index) => (
                        <Item key={index} title={title} text={text} />
                    )) : <p>No posts</p>}
                </div>

                <hr />

                <h3>Add Post</h3>
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Posts;