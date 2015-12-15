import React from 'react';
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

import PhoneBookItemLink from './components/PhoneBookItemLink';

/*
 * @class Humble beginnings for the phone book
 */
class PhoneBookx extends React.Component {

  render () {
    return <div>
            <Jumbotron>
              <h1>Phonebook</h1>
            </Jumbotron>
            <Grid>
              <Row className="show-grid">
                <Col lg={4}>
                    <Panel>
                        {this.props.phonebook.map((entry) =>
                            <PhoneBookItemLink key={entry.id} id={entry.id}>
                                {entry.name}
                            </PhoneBookItemLink>
                        )}
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

PhoneBookx.propTypes = {
    phonebook: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        phonebook: state.phonebook
    }
}

const PhoneBook = connect(mapStateToProps)(PhoneBookx);

export default PhoneBook;
