import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  formType: "signup",
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
