import { useState } from "react";

const Clicked = () => {

    let  [counter, setCounter] = useState(0);

    let handleClick = () => setCounter(counter + 1);

    return (
        <p onClick={handleClick}>{counter}</p>
    );
}

export default Clicked;