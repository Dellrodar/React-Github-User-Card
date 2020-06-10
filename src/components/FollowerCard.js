import React from 'react';
import {Card, Button, CardBody, CardTitle, CardSubtitle, CardImg, CardGroup} from 'reactstrap';

class FollowerCard extends React.Component {
  render() {
    return (
      <CardGroup>
        {this.props.followers.map((follower) => (
          console.log(follower),
        <Card>
          <CardImg top width="100%" src={follower.avatar_url} alt="Follower Avatar" />
          <CardBody>
            <CardTitle>{follower.name}</CardTitle>
            <CardSubtitle>UserName: {follower.login}</CardSubtitle>
            <Button href={follower.html_url}>{follower.html_url}</Button>
          </CardBody>
        </Card>
      ))}

        </CardGroup>
    )

}
}

export default FollowerCard;