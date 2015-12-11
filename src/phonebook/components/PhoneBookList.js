import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import store from '../store/store.js';
/**
 * //TODO this class should subscribe to entry data some how react-redux binding instead of hard coded state
 * //TODO add clicking on a name should initiate some kind of router thingy and render of details on the right
 */
class PhoneBookList extends React.Component {

  onEntryClick(id, e) {
      e.preventDefault();
      store.dispatch({
          type: 'SELECT_ENTRY',
          id: id
      });
  }

  render () {
    const { selection, phonebook } = this.props;
    return <Panel>
            {phonebook.map((entry) => {
                if (entry.id === selection) {
                    return <span key={entry.id}>{entry.name}</span>;
                } else {
                    return <div key={entry.id}>
                             <a onClick={this.onEntryClick.bind(this, entry.id)}>{entry.name}</a>
                           </div>;
                }
            })}
           </Panel>;
  }

}

PhoneBookList.propTypes = {
    selection: React.PropTypes.number,
    phonebook: React.PropTypes.array
}

export default PhoneBookList;
