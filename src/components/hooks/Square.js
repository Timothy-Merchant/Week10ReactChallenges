import { useState } from "react"

const Square = ({ colour }) => {
    let [color, setColor] = useState("green");

    let onClick = () => color === "green" ? setColor(colour) : setColor("green");


    const divStyle = {
        height: 200,
        width: 200,
    }

    return (
        <>
            <h3>Square</h3>
            <div onClick={onClick} style={{ ...divStyle, backgroundColor: color }}></div>
        </>
    );

}

export default Square