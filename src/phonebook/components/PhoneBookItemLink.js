import { connect } from 'react-redux';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.selection === ownProps.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch({
                type: 'SELECT_ENTRY',
                id: id
            });
        }
    }
}

const PhoneBookItemLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default PhoneBookItemLink;
