import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  formType: "login",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
