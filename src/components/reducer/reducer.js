// Challenge 1

let clicked = (state) => {
    state = { ...state, clicked: true };
    return state;
};

// Challenge 2

let addClicked = (state, { step, max }) => {
    state = {
        ...state,
        counter: state.counter + step <= max ? state.counter + step : max
    };
    return state;
};
let subClicked = (state, { step }) => {
    state = {
        ...state,
        counter: state.counter - step >= 0 ? state.counter - step : state.counter
    };
    return state;
};

// Challenge 3

let cChanged = ({ fahrenheit }, { celsius }) => {

    let newfahrenheit = (celsius * (9 / 5) + 32).toFixed(2)

    let state = {
        fahrenheit: newfahrenheit,
        celsius: celsius
    }

    return state
}

let fChanged = ({ celsius }, { fahrenheit }) => {

    let newcelsius = ((fahrenheit - 32) * (5 / 9)).toFixed(2)

    let state = {
        fahrenheit: fahrenheit,
        celsius: newcelsius
    }

    return state
}

const reducer = (state, action) => {
    switch (action.type) {
        // CLICKED 2
        case "BUTTON_CLICKED": return clicked(state);
        // STEP COUNTER 2
        case "ADD_CLICKED": return addClicked(state, action);
        case "SUB_CLICKED": return subClicked(state, action);
        // TEMP CONVERTER 2
        case "C_CHANGED": return cChanged(state, action);
        case "F_CHANGED": return fChanged(state, action);
        default: return state;
    }
};

export default reducer;