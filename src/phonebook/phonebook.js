import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

import store from './store/store'
import PhoneBookItemLink from './components/PhoneBookItemLink';

/*
 * @class Humble beginnings for the phone book
 */
class PhoneBook extends React.Component {

  renderEntries (phonebook) {
      return phonebook.map((entry) => {
          return <PhoneBookItemLink key={entry.id} id={entry.id}>
              {entry.name}
          </PhoneBookItemLink>
      });
  }

  render () {
    const phonebook = store.getState().phonebook;
    return <div>
            <Jumbotron>
              <h1>Phonebook</h1>
            </Jumbotron>
            <Grid>
              <Row className="show-grid">
                <Col lg={4}>
                    <Panel>
                        {this.renderEntries(phonebook)}
                    </Panel>
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
