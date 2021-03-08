import { Component } from "react";
import Counter from "./Counter"

class Max extends Component {


    render() {
        return (
            <>
                <h1>Max</h1>
                <div>
                    {this.props.count.map((value, index) => {
                        if (value === Math.max(this.props.count)) {
                            return <Counter primary={true} key={index} initial={value} max={10} />
                        } else {
                            return <Counter primary={false} key={index} initial={value} max={10} />
                        }
                    })}
                </div>
            </>
        )
    }
}

export default Max;