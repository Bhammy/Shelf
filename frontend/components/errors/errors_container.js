import { connect } from 'react-redux';
import ErrorsDisplay from './errors_display';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

export default connect(mapStateToProps, null)(ErrorsDisplay);
