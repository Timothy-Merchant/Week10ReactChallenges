import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    let result = addItem(initialState, { value: "Hello" });

    // first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items).not.toBe(initialState.items);

    // passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });
    // should be two items
    expect(result.items.length).toBe(2);

    // check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

// it('removes items', () => {
//     // Removing tests here
// });

// it('updates items', () => {
//     // Updating tests here
// });

// it('completes items', () => {
//     // Completing tests here
// });

// it('reduces', () => {
//     // Reducer tests here
// });