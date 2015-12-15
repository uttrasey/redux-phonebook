import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from '../../phonebook';
import { Provider } from 'react-redux';
import store from '../../phonebook/store/store';
import { loadEntries } from '../../phonebook/actions/actions';

// some dummy data to initialize the address book
const entries = [
    { id: 1, name: 'Jayne Smith' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Sarah Black' },
    { id: 4, name: 'Billy the kid' }
]

// initialize the store
store.dispatch(loadEntries(entries));

let node = document.getElementById('phonebook');
ReactDOM.render(
<Provider store={store}>
    <PhoneBook />
</Provider>, node);
