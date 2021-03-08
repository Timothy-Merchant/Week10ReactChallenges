import { Component } from "react";

class Field extends Component {
    constructor(props) {

        super(props)
 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.inputChange({
            name: this.props.name,
            value: e.currentTarget.value
        })
    }

    render() {

        const { label } = this.props;
        const { name } = this.props;
        const { type } = this.props;

        return (
            <>
                <div className="form-group">
                    <label>{label}</label>
                    <br></br>
                    <input onChange={this.handleChange} className="form-control" name={name} type={type} />
                </div>
            </>
        )
    }
}

export default Field;