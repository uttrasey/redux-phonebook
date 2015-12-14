import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from '../../phonebook';
import Provider from '../../phonebook/components/Provider';
import store from '../../phonebook/store/store';

store.dispatch({
    type: 'LOAD_ENTRIES',
    entries: [
        { id: 1, name: 'Matt Uttridge' },
        { id: 2, name: 'John Man' },
        { id: 3, name: 'Sarah Women' },
        { id: 4, name: 'Billy the kid' }
    ]
});

let node = document.getElementById('phonebook');
ReactDOM.render(
    <Provider store={store}>
        <PhoneBook />
    </Provider>, node);
