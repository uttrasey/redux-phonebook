import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PhoneBookItemLink from './PhoneBookItemLink'

class PhoneBookList extends React.Component {

  render () {
    return <Panel>
                {this.props.phonebook.map((entry) => {
                    return <PhoneBookItemLink key={entry.id} id={entry.id}>
                                {entry.name}
                            </PhoneBookItemLink>
                })}
           </Panel>;
  }

}

PhoneBookList.propTypes = {
    phonebook: React.PropTypes.array
}

export default PhoneBookList;
