import React from 'react';

class PhoneBookListItem extends React.Component {

    render () {
        const { selection, entry, onClick } = this.props;
        if (entry.id === selection) {
            return <span key={entry.id}>{entry.name}</span>;
        } else {
            return <div key={entry.id}>
                        <a onClick={onClick}>{entry.name}</a>
                   </div>;
        }
    }

}

PhoneBookListItem.propTypes = {
    selection: React.PropTypes.number.isRequired,
    entry: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default PhoneBookListItem;
