import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PhoneBookListItem from './PhoneBookListItem'

class PhoneBookList extends React.Component {

  render () {
    const { selection, phonebook, onItemClick } = this.props;
    return <Panel>
            {phonebook.map((entry) => {
                return <PhoneBookListItem key={entry.id} entry={entry} selection={selection}
                    onClick={() => {
                        onItemClick(entry.id)
                    }} />
            })}
           </Panel>;
  }

}

PhoneBookList.propTypes = {
    selection: React.PropTypes.number,
    phonebook: React.PropTypes.array,
    onItemClick: React.PropTypes.func
}

export default PhoneBookList;
