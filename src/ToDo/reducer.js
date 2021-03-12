export const addItem = (state, { value }) => {

    let newItems = [...state.items];

    newItems.push({
        task: value,
        completed: false
    })

    state = {
        items: newItems
    }

    return state;
};

export const removeItem = (state, { index }) => {

    let newItems = [...state.items];

    newItems.splice(index, 1);

    let remainingItems = {
        items: newItems
    }

    return remainingItems;

}

export const updateItem = (state, { index, value }) => {

    let newItems = state.items.map(item => Object.assign({}, item));

    newItems[index].task = value;

    let updatedItems = {
        items: newItems
    }

    return updatedItems

}

export const completeItem = (state, { index }) => {

    let newItems = state.items.map(item => Object.assign({}, item));

    newItems[index].completed = true;

    let updatedItems = {
        items: newItems
    }

    return updatedItems;
}

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