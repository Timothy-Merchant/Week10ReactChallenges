import { Component } from "react";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, name) {
        let change = {};
        change[name] = e.currentTarget.value;
        this.setState(change);
    }

    handleSubmit(e) {
        let { onSubmit } = this.props;
        e.preventDefault();
        onSubmit(this.state);
        this.setState({ title: "", text: "" });
    }

    render() {
        let { title, text } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <Input label="Title" value={ title } onChange={ (e) => this.handleChange(e, "title") } />
                <Input label="Text" value={ text } onChange={ (e) => this.handleChange(e, "text") } />
                <button disabled={ !(title && text) } className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;