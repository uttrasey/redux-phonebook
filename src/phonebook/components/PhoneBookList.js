import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

/**
 * //TODO this class should subscribe to entry data some how react-redux binding instead of hard coded state
 * //TODO add clicking on a name should initiate some kind of router thingy and render of details on the right
 */
class PhoneBookList extends React.Component {

  render () {
    return <Panel>
            {this.props.entries.map(function(entry) {
                return <p key={entry.id}>{entry.name}</p>;
            })}
           </Panel>;
  }

}


export default PhoneBookList;
