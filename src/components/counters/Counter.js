import { Component } from "react";
import Button from 'react-bootstrap/Button';

class Counter extends Component {

    constructor(props) {

        super(props);

        const { initial } = props;

        this.state = {
            number: initial
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.number < this.props.max) {

            this.setState({
                number: this.state.number + 1
            })
        }
    }

    decrement() {

        this.setState({
            number: this.state.number - 1
        })
    }

    render() {

        return (
            <>
                <p>{this.state.number}</p>
                <Button variant={this.props.primary === true ? "primary" : "secondary"} onClick={this.increment}>+</Button>
                <Button variant={this.props.primary === true ? "primary" : "secondary"} onClick={this.decrement}>-</Button>
            </>
        );
    }
}

export default Counter;