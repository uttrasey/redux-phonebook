// __tests__/store-test.js
jest.dontMock('../store');

const store = require('../store');

describe('store', () => {

    it('initializes to empty object', () => {
        expect(store.getState()).toEqual({
            phonebook: {}
        });
    });

    it('can add an entry', () => {
        const action = {
            type: 'NEW_ENTRY',
            entry: {
                1: {
                    name: 'matt'
                }
            }
        }
        store.dispatch(action);
        expect(store.getState().phonebook).toEqual({
            1: {
                name: 'matt'
            }
        });
    });

    it('can delete an entry', () => {
        const entries = {
            1: {
                name: 'matt'
            },
            2: {
                name: 'john'
            }
        }
        store.dispatch({
            type: 'LOAD_ENTRIES',
            entries: entries
        });
        store.dispatch({
            type: 'DELETE_ENTRY',
            id: 1
        });

        expect(store.getState().phonebook).toEqual({
            2: {
                name: 'john'
            }
        });
    });

    it('can load entries with bad load', () => {
        const entries = {
            1: {
                name: 'matt'
            }
        }
        store.dispatch({
            type: 'LOAD_ENTRIES',
            entries: entries
        });

        // if entries missing don't update
        store.dispatch({
            type: 'LOAD_ENTRIES'
        });

        expect(store.getState().phonebook).toEqual(entries);
    });

    it('can edit an entry', () => {
        const entries = {
            1: {
                name: 'matt'
            }
        }
        store.dispatch({
            type: 'LOAD_ENTRIES',
            entries: entries
        });

        store.dispatch({
            type: 'EDIT_ENTRY',
            entry: {
                1: {
                    name: 'john'
                }
            }
        });

        expect(store.getState().phonebook).toEqual({
            1: {
                name: 'john'
            }
        });
    });

    it('can load entries', () => {
        const entries = {
            1: {
                name: 'matt'
            },
            2: {
                name: 'john'
            }
        }

        store.dispatch({
            type: 'LOAD_ENTRIES',
            entries: entries
        });

        expect(store.getState().phonebook).toEqual(entries);
    });


});
