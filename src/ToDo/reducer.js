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