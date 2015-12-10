import { createStore } from 'redux';

/**
 * Simple Redux reducer
 */
const phonebook = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_ENTRIES':
            return action.entries || state;
        case 'NEW_ENTRY':
            return Object.assign({}, state, action.entry);
        case 'EDIT_ENTRY':
            return Object.assign({}, state, action.entry);
        case 'DELETE_ENTRY':
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

const store = createStore(phonebook);
export default store;
