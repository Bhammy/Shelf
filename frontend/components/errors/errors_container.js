import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import ErrorsDisplay from './errors_display';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsDisplay);
