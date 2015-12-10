jest.dontMock('../reducer');

var phonebook = require('../reducer');

describe('reducer', () => {

    it('initializes to empty object', () => {
        expect(phonebook(undefined, {})).toEqual({});
    });

    it('can add an entry', () => {
        expect(phonebook({}, {
            type: 'NEW_ENTRY',
            entry: {
                1: {
                    name: "matt"
                }
            }
        })).toEqual({
            1: {
                name: "matt"
            }
        });
    });

    it('can delete an entry', () => {
        const initial = {
            1: {
                name: "matt"
            },
            2: {
                name: "john"
            }
        }

        expect(phonebook(initial, {
            type: 'DELETE_ENTRY',
            id: 1
        })).toEqual({
            2: {
                name: "john"
            }
        });

        expect(phonebook(initial, {
            type: 'DELETE_ENTRY',
            id: 2
        })).toEqual({
            1: {
                name: "matt"
            }
        });
    });

    it('can edit an entry', () => {
        const initial = {
            1: {
                name: "matt"
            }
        }

        expect(phonebook(initial, {
            type: 'EDIT_ENTRY',
            entry: {
                1: {
                    name: "john"
                }
            }
        })).toEqual({
            1: {
                name: "john"
            }
        });
    });

    it('can load entries with bad load', () => {
        const initial = {
            1: {
                name: "matt"
            }
        }

        // if entries missing don't update
        expect(phonebook(initial, {
            type: 'LOAD_ENTRIES',
            entries: {
                2: {
                    name: "john"
                }
            }
        })).toEqual({
            2: {
                name: "john"
            }
        });
    });

    it('can load entries with bad load', () => {
        const initial = {
            1: {
                name: "matt"
            }
        }

        // if entries missing don't update
        expect(phonebook(initial, {
            type: 'LOAD_ENTRIES',
            undefined
        })).toEqual(initial);
    });


});
