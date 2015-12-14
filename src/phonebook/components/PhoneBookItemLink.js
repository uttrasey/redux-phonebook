import React from 'react';
import Link from './Link';

class PhoneBookItemLink extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render () {
        const store = this.context.store;
        const state = store.getState();
        return <Link active={state.selection === this.props.id}
                     onClick={() => {
                         store.dispatch({
                             type: 'SELECT_ENTRY',
                             id: this.props.id
                         });
                     }}>
                     {this.props.children}
               </Link>
    }

}

PhoneBookItemLink.propTypes = {
    id: React.PropTypes.number.isRequired,
    children: React.PropTypes.node
}

PhoneBookItemLink.contextTypes = {
    store: React.PropTypes.object
}

export default PhoneBookItemLink;
