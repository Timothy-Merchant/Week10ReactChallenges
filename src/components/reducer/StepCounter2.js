import { useReducer } from "react";
import reducer from "./reducer";

const initialState = {
    counter: 0,        
}

const StepCounter2 = ({ max, step }) => {

    const [{ counter }, dispatch] = useReducer(reducer, initialState)

    let handleAdd = () => {
        dispatch({ type: "ADD_CLICKED", step: step, max: max})
    }

    let handleSub = () => {
        dispatch({ type: "SUB_CLICKED", step: step})
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