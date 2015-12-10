import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';


class CreateContactButton extends React.Component {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);
  }

  render () {
    return <Panel>
                <Button><Glyphicon glyph="plus" /> New</Button>
                <Button><Glyphicon glyph="pencil" /> Edit</Button>
                <Button><Glyphicon glyph="trash" /> Delete</Button>

           </Panel>;
  }

}


export default CreateContactButton;
