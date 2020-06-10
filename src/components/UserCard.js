import React from 'react';

class UserCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.userData.avatar_url} alt="Avatar"/>
        <div className="card-info">
          <h3 className="name">{this.props.userData.name}</h3>
          <p className="username">UserName: {this.props.userData.login}</p>
          <a href={this.props.userData.html_url}>{this.props.userData.html_url}</a>
        </div>
      </div>
    )
  }
}

export default UserCard;