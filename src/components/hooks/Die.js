import { useState } from "react"

const Die = ({ sides }) => {

    const [number, setNumber] = useState(1);

    const handleClick = () => {
        const random = Math.random();
        const randNumber = Math.floor(random * sides + 1);
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