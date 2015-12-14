import React from 'react';

class Provider extends React.Component {

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render () {
        return this.props.children;
    }

}

Provider.propTypes = {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
}

Provider.childContextTypes = {
    store: React.PropTypes.object
}

export default Provider;
