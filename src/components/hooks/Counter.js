import { useState } from "react"

const Counter = ({ initial, max }) => {

    let [count, setCount] = useState(initial);

    let handleAdd = () => setCount(count < max ? count + 1 : count);
    let handleSub = () => setCount(count > 0 ? count - 1 : count);
    
    return (
        <>
            <h3>Counter</h3>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </>
    )
}

export default Counter