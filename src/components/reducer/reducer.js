// destructure the player property from the action
let scores = (state, { player }) => {
    // make a copy of the state
    let copy = { ...state };
    // set the appropriate property
    // alternatively, we could use "computed property names"
    state[player] = state[player] + 1;
    // return the updated state
    return state;
};
const reducer = (state, action) => {
    switch (action.type) {
        // pass along the state *and* action to the score function
        case "PLAYER_SCORES": return scores(state, action);
        // ...other switch cases
    }
};
// add an additional property, "player", to the action object
// this is what's known as the PAYLOAD
let action = { type: "PLAYER_SCORES", player: "player1" };
let newState = reducer(initialState, action);
console.log(newState); // { player1: 1, player2: 0 }