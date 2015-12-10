/**
 * Simple Redux reducer
 */
const phonebook = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_ENTRIES':
            return action.entries;
        case 'NEW_ENTRY':
            return state[action.entry.id] = action.entry;
        case 'EDIT_ENTRY':
            return state[action.entry.id] = action.entry;
        case 'DELETE_ENTRY':
            return delete state[action.entry.id];
        default:
            return state;
    }
}

export default phonebook;
