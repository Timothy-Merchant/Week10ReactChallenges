import { Component } from "react";
import Square from "./Square";

class Squares extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selected: 0
        };
    }

    render() {

        return (
            <>
                <Square
                    color={this.props.color}
                    handleClick={() => this.setState({ selected: 1 })}
                    selected={this.state.selected === 1}
                />
                <Square
                    color={this.props.color}
                    handleClick={() => this.setState({ selected: 2 })}
                    selected={this.state.selected === 2}
                />
            </>
        );
    }
}

export default Squares;