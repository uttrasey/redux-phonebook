
/**
 * Load the entries of the phonebook 
 */
export const loadEntries = (entries) => {
    return {
        type: 'LOAD_ENTRIES',
        entries
    };
}
