import { createStore, combineReducers } from 'redux';

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

const selection = (state = 0, action) => {
    switch (action.type) {
        case 'SELECT_ENTRY':
            return action.id;
        default:
            return state;
    }
}

const phonebookApp = combineReducers({ phonebook, selection })
const store = createStore(phonebookApp);
export default store;
