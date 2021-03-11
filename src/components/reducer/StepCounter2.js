import { useReducer } from "react";
import reducer from "./reducer";

const StepCounter2 = ({ max, step }) => {

    let initialState = {
        counter: 0,
        max: max,
        step: step
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    let handleAdd = () => {
        dispatch({ type: "ADD_CLICKED" })
    }

    let handleSub = () => {
        dispatch({ type: "SUB_CLICKED" })
    }

    return (
        <>
            <h3>Step Counter</h3>
            <p>{state.counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </>
    );

}

export default StepCounter2;