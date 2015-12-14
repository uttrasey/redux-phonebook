import React from 'react';
import store from '../store/store';
import Link from './Link';

class PhoneBookItemLink extends React.Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render () {
        const props = this.props;
        const state = store.getState();
        return <Link active={state.selection === props.id}
                     onClick={() => {
                         store.dispatch({
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
    children: React.PropTypes.node
}

export default PhoneBookItemLink;
