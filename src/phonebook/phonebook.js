import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

import store from './store/store.js'
import PhoneBookList from './components/PhoneBookList';
import CreateContactButton from './components/CreateContactButton';

/*
 * @class Humble beginnings for the phone book
 */
class PhoneBook extends React.Component {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);
    store.dispatch({
        type: 'LOAD_ENTRIES',
        entries: this.getEntries()
    });
    store.subscribe(this.render.bind(this));
  }

  getEntries() {
      return [
          { id: 1, name: 'Matt Uttridge' },
          { id: 2, name: 'John Man' },
          { id: 3, name: 'Sarah Women' },
          { id: 4, name: 'Billy the kid' }
      ];
  }

  render () {
      console.log(store.getState().selection);
    return <div>
            <Jumbotron>
              <h1>Phonebook</h1>
            </Jumbotron>
            <Grid>
              <Row className='show-grid'>
                <Col lg={4}>
                    <CreateContactButton />
                    <PhoneBookList {...store.getState()} />
                </Col>
                <Col lg={8}>
                    <Panel>
                        <p>Something will need to go in here!</p>
                    </Panel>
                </Col>
              </Row>
            </Grid>
           </div>;
  }

}

export default PhoneBook;
