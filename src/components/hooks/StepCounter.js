import { useState } from "react"

const StepCounter = ({ max, step }) => {

    let [count, setCount] = useState(0);

    let handleAdd = () => setCount((count + step) <= max ? count + step : count)
    let handleSub = () => setCount((count - step) >= 0 ? count - step : count)

    return (
        <>
            <h3>Step Counter</h3>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </>
    );

}

export default StepCounter;