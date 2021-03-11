import { useReducer } from "react";
import reducer from "./reducer";

const StepCounter2 = ({ max, step }) => {

    let initialState = {
        counter: 0,
        max: max,
        step: step
    }

    const [{ counter }, dispatch] = useReducer(reducer, initialState)

    let handleAdd = () => {
        dispatch({ type: "ADD_CLICKED" })
    }

    let handleSub = () => {
        dispatch({ type: "SUB_CLICKED" })
    }

    return (
        <>
            <h3>Step Counter2</h3>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </>
    );

}

export default StepCounter2;