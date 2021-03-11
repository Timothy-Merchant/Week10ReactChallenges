import { useReducer } from "react";

const Clicked2 = () => {
    
    // Initial Value
    const initialState = { clicked: false };

    // Actions
    let clicks = (state) => {
        state = { ...state, clicked: true };
        return state;
    };
    
    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case "BUTTON_CLICKED": return clicks(state);
            default: return state;
        }
    };    

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