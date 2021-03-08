import { Component } from "react";
import Password from "./Password";

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {            
            password: "",
            confirm: ""
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmChange = this.handleConfirmChange.bind(this)        
    }

    handlePasswordChange(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleConfirmChange(e) {
        this.setState({ confirm: e.currentTarget.value })
    }

    render() {

        const password = this.state.password;
        const confirm = this.state.confirm;
        
        const color = (password === confirm) &&
            (password.length && confirm.length >= this.props.minimumLength)
            ? "black" : "red";

        return (
            <>
                <h1>Passwords</h1>
                <Password
                    handleChange={this.handlePasswordChange}
                    label="Password"
                    color={color}
                />
                <br></br>
                <Password
                    handleChange={this.handleConfirmChange}
                    label="Confirm Password"
                    color={color} />
                <br></br>
            </>
        )
    }
}

export default SignUp;