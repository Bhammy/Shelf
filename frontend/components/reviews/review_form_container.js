import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
