import React from 'react';
import {Card, Button, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';

class UserCard extends React.Component {
  render() {
    return (
      <Card>
        <CardImg top width="100%" src={this.props.userData.avatar_url} alt="Dellrodar" />
        <CardBody>
          <CardTitle>{this.props.userData.name}</CardTitle>
          <CardSubtitle>UserName: {this.props.userData.login}</CardSubtitle>
          <Button href={this.props.userData.html_url}>{this.props.userData.html_url}</Button>
        </CardBody>
      </Card>
    )
  }
}

export default UserCard;