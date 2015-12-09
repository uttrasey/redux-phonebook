import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

import PhoneBookList from './components/PhoneBookList';

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
            <Grid>
              <Row className="show-grid">
                <Col xs={4} md={3}>
                    <PhoneBookList />
                </Col>
                <Col xs={16} md={8}>
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
