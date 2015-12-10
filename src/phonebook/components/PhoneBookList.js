import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

/**
 * //TODO this class should subscribe to entry data some how react-redux binding instead of hard coded state
 * //TODO add clicking on a name should initiate some kind of router thingy and render of details on the right
 */
class PhoneBookList extends React.Component {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);
    this.state = {
        entries: [
            {
                id: 1,
                name: "Matt Uttridge"
            },
            {
                id: 2,
                name: "Joe Bloggs"
            },
            {
                id: 3,
                name: "Jamie Swanson"
            }
        ]
    }
  }

  render () {
    return <Panel>
            {this.state.entries.map(function(entry) {
                return <p>{entry.name}</p>;
            })}
           </Panel>;
  }

}


export default PhoneBookList;
