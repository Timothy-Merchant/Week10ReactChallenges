import { Component } from "react";
import Field from './Field';

class TricksyForm extends Component {
    constructor(props) {

        super(props)

        this.state = {
            data: {}
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(inputtedData) {

        this.setState({
            data: {
                ...this.state.data,
                [inputtedData.name]: inputtedData.value
            }
        })
    }

    handleClick() {
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        return (
            <>
                <h1>Tricksy Form</h1>
                {this.props.fields.map((field, index) => {
                    return <Field
                        inputChange={this.handleInput}
                        key={index}
                        label={field.label}
                        name={field.name}
                        type={field.type} />
                })}
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

export default TricksyForm;