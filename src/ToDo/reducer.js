export const addItem = (state, { value }) => {

    let newItems = JSON.parse(JSON.stringify(state.items));

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

    let newItems = JSON.parse(JSON.stringify(state.items));

    newItems.splice(index, 1);

    let remainingItems = {
        items: newItems
    }

    return remainingItems;

}

export const updateItem = (state, { index, value }) => {

    let newItems = JSON.parse(JSON.stringify(state.items));

    newItems[index].task = value;

    let updatedItems = {
        items: newItems
    }

    return updatedItems

}

export const completeItem = (state, { index }) => {

    let newItems = JSON.parse(JSON.stringify(state.items));

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