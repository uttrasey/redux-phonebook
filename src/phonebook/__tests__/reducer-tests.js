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

    it('can can delete an entry', () => {
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

});
