import { connect } from 'react-redux';
import { selectEntry } from '../actions/actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.selection === ownProps.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(selectEntry(id));
        }
    }
}

const PhoneBookItemLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default PhoneBookItemLink;
