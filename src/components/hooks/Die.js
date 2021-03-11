import { useState } from "react"

const Die = ({ sides }) => {

    let [number, setNumber] = useState(1);

    let handleClick = () => {
        let random = Math.random();
        let randNumber = Math.floor(random * sides + 1);
        setNumber(randNumber);
    }

    return (
        <>
            <h3>Die</h3>
            <div onClick={handleClick} style={
                {
                    width: 200 + "px",
                    height: 200 + "px",
                    backgroundColor: "grey",
                    fontSize: 200 + "px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }><p>{number}</p></div>
        </>
    )

}

export default Die