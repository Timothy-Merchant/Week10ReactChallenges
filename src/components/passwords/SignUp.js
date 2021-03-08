import { Component } from "react";
import Password from "./Password";

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            borderColors: "red",
            password: "",
            confirm: ""
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmChange = this.handleConfirmChange.bind(this)
        this.validatePasswords = this.validatePasswords.bind(this)
    }

    handlePasswordChange(e) {
        this.setState({ password: e.currentTarget.value })
        this.validatePasswords();
    }

    handleConfirmChange(e) {
        this.setState({ confirm: e.currentTarget.value })
        this.validatePasswords();        
    }

    validatePasswords() {
        if ((this.state.password === this.state.confirm) &&
            (this.state.password.length && this.state.confirm.length >= this.props.minimumLength)) {
            this.setState({
                borderColors: "black"
            })
        } else {
            this.setState({
                borderColors: "red"
            })
        }
    }

    render() {
        return (
            <>
                <h1>Passwords</h1>
                <Password
                    handleChange={this.handlePasswordChange}
                    label="Password"
                    color={this.state.borderColors}
                />
                <br></br>
                <Password
                    handleChange={this.handleConfirmChange}
                    label="Confirm Password"
                    color={this.state.borderColors} />
                <br></br>
            </>
        )
    }
}

export default SignUp;