import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from '../../phonebook';
import store from '../../phonebook/store/store';

const render = () => {
    let node = document.getElementById('phonebook');
    ReactDOM.render(<PhoneBook {...store.getState()} />, node);
}

store.subscribe(render);
store.dispatch({
    type: 'LOAD_ENTRIES',
    entries: [
        { id: 1, name: 'Matt Uttridge' },
        { id: 2, name: 'John Man' },
        { id: 3, name: 'Sarah Women' },
        { id: 4, name: 'Billy the kid' }
    ]
});
