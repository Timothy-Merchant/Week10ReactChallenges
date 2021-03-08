import { Component } from "react";

// <Button handleUpdate={ (value) => console.log(value) } />

class Button extends Component {


    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }

        this.reportClicks = this.reportClicks.bind(this)
    }


    reportClicks() {

        this.setState({ clicks: this.state.clicks + 1 })

        this.props.handleUpdate(this.state.clicks);
    }

    render() {
        return (
            <>
                <h1>Button</h1>
                <button onClick={this.reportClicks}>{this.state.clicks}</button>
            </>
        )
    }

}

export default Button;