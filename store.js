import { createStore } from "redux";

const initialState = {
    cards: []
};

function reducer(state = initialState, action) {
    if (action.type == 'addCard') {
        return { ...state, cards: action.payload }
    };
    return state;
};

export const store = createStore(reducer);