import React from 'react';
import ActivityList from './user_activity_list';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userReviews: this.props.userReviews };
  }

  componentDidMount() {
    this.props.requestBooks();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.userReviews !== newProps.userReviews) {
      this.setState({ userReviews: newProps.userReviews});
    }
  }

  render() {

    return (
      <div className="user-show-container">
        <section className="user-show-sidebar">
          <h1>Your User Feed</h1>
          <hr />
          <h3>{ Object.values(this.state.userReviews).length } Ratings/Reviews </h3>
        </section>
        <section className="user-show-main">
          <h2>Recent Activity</h2>
          <hr />
          <ul>
            <ActivityList reviews={ this.state.userReviews} />
          </ul>
        </section>
      </div>
    );
  }

}

export default UserShow;
