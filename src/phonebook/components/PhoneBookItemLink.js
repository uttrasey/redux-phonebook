import React from 'react';
import Link from './Link';

class PhoneBookItemLink extends React.Component {

    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render () {
        const props = this.props;
        const state = props.store.getState();
        return <Link active={state.selection === props.id}
                     onClick={() => {
                         props.store.dispatch({
                             type: 'SELECT_ENTRY',
                             id: props.id
                         });
                     }}>
                     {this.props.children}
               </Link>
    }

}

PhoneBookItemLink.propTypes = {
    id: React.PropTypes.number.isRequired,
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
}

export default PhoneBookItemLink;
