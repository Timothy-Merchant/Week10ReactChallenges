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

    let removed = {
        items: newItems
    }

    return removed;

}