import { Component } from "react";
import Counter from "./Counter"

class Max extends Component {


    render() {

        return (
            <>
                <h1>Max</h1>
                <div>
                    {this.props.count.map((value, index) => {
                        let max = Math.max(...this.props.count);
                        return <Counter primary={value >= max} key={index} initial={value} max={10} />
                    })}
                </div>
            </>
        )
    }
}

export default Max;