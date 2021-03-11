import { Component } from "react";
import Input from "./Input";


class ToDoList extends Component {

    constructor(props) {

        super(props)

        this.state = {

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        return (
            <>
                <Input />                
            </>
        )
    }

}

export default ToDoList;