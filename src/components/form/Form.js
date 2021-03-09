import { Component } from "react";

class Form extends Component {
    constructor(props) {

        super(props)

        this.state = {
            name: "",
            email: "",
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({ name: e.currentTarget.value })
    }

    handleEmailChange(e) {
        this.setState({ email: e.currentTarget.value })
    }

    handleClick() {

        this.props.handleSubmit({...this.state});

        this.setState({
            name: "",
            email: ""
        })

    }

    render() {
        return (
            <>
                <h1>Form</h1>
                <div className="form-group">
                    <label>Name</label>                    
                    <input onChange={this.handleNameChange} placeholder="Name Here" className="form-control" id="name" name="name" type="text" value={this.state.name} />
                </div>
                <div className="form-group">
                    <label>Email</label>                    
                    <input onChange={this.handleEmailChange} placeholder="Email Here" className="form-control" id="email" email="email" type="text" value={this.state.email} />
                </div>
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

export default Form;