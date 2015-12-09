import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

/*
 * @class Humble beginnings for the phone book
 */
class PhoneBook extends React.Component {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);
  }

  render () {
    return <div>
            <Jumbotron>
              <h1>Phonebook</h1>
            </Jumbotron>
           </div>;
  }

}

export default PhoneBook;
