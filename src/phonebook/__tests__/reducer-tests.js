jest.dontMock('../reducer');

var phonebook = require('../reducer');

describe('reducer', () => {

    it('initializes to empty object', () => {
        expect(phonebook(undefined, {})).toEqual({});
    });

});
