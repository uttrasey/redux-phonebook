
/**
 * Load the entries of the phonebook
 */
export const loadEntries = (entries) => {
    return {
        type: 'LOAD_ENTRIES',
        entries
    };
}

/**
 * Select an entry from the phonebook
 */
export const selectEntry = (id) => {
    return {
        type: 'SELECT_ENTRY',
        id
    };
}
