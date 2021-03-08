import { Component } from "react";

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
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        );
    }
}

export default Counter;