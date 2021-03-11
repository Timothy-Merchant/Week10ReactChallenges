import { useState } from "react"

const Colours = ({ colours }) => {

    let [color, setColor] = useState(0);

    let handleClick = () => {
        setColor(color < colours.length - 1 ? color + 1 : 0);
    }

    return (
        <>
            <h3>Colours</h3>
            <div style={
                {
                    width: 200 + "px",
                    height: 200 + "px",
                    backgroundColor: colours[color]
                }
            }></div>
            <button onClick={handleClick}>Next</button>
        </>
    )

}

export default Colours