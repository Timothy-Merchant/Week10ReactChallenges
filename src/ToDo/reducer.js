export const addItem = (state, { value }) => (
    {
        ...state,
        items: [
            ...state.items, {
                task: value,
                completed: false
            }
        ]
    }
);

export const removeItem = (state, { index }) => ({
    ...state,
    items: state.items.filter((item, i) => index !== i)
})

export const updateItem = (state, { index, value }) => ({
    ...state,
    items: state.items.map((item, i) => index !== i ? item : { ...item, task: value })
})

export const completeItem = (state, { index }) => ({
    ...state,
    items: state.items.map((item, i) => index !== i ? item : { ...item, completed: true })
})

export default (state, action) => {
    switch (action.type) {
        case 'NEW_ITEM': return addItem(state, action);
        case 'REMOVE_ITEM': return removeItem(state, action);
        case 'CHANGE_ITEM': return updateItem(state, action);
        case 'MARK_COMPLETED': return completeItem(state, action);
        default: return state;
    }
};

// Lame Game

// Create a <LameGame aim={ x }> component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to aim seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.

export const startButtonPressed = (state) => {
    let newState = Object.assign({}, state);

    newState.nowButtonVisible = true;

    return newState;
}