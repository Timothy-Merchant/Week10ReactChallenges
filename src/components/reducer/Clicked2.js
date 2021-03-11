import { useReducer } from "react";
import reducer from "./reducer";

const Clicked2 = () => {

    // Initial Value
    const initialState = { clicked: false };

    // Setup Reducer variables
    const [state, dispatch] = useReducer(reducer, initialState);


    let handleClick = () => {
        return dispatch({ type: "BUTTON_CLICKED" });
    }

    return (
        <>
            <h3>Clicked2</h3>
            <p onClick={handleClick}>{state.clicked ? "Clicked" : "Not Clicked"}</p>
        </>
    );
}

export default Clicked2;