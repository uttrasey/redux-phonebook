import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../../config/app';
import PhoneBook from '../../phonebook';

var node = document.getElementById('phonebook');
ReactDOM.render(<PhoneBook />, node);
