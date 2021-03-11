export const addItem = (state, { value }) => {

    let newItems = Array.from(state.items);

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

    let newItems = Array.from(state.items);

    newItems.splice(index, 1);

    let remainingItems = {
        items: newItems
    }

    return remainingItems;

}

export const updateItem = (state, { index, value }) => {

    let newItems = Array.from(state.items);
    newItems[index].task = value;

    let updatedItems = {
        items: newItems
    }

    return updatedItems

}