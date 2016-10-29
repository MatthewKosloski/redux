import { connect } from 'react-redux';
import { incrementCount } from '../../actions';
import Counter from '../../components/Counter';

const mapStateToProps = (state) => {
    const { count } = state;
    return {
        count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(incrementCount())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);