let clicked = (state) => {
    state = { ...state, clicked: true };
    return state;
};

let addClicked = (state) => {
    state = {
        ...state,
        counter: state.counter + state.step,
    };
    return state;
};

let subClicked = (state) => {
    state = {
        ...state,
        counter: state.counter - state.step,
    };
    return state;
};

const reducer = (state, action) => {
    switch (action.type) {
        // CLICKED 2
        case "BUTTON_CLICKED": return clicked(state);
        // STEP COUNTER 2
        case "ADD_CLICKED": return addClicked(state);
        case "SUB_CLICKED": return subClicked(state);
        default: return state;
    }
};

export default reducer;