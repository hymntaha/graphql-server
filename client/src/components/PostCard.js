import React from 'react';
import {Card, Icon, Label, Image, CardContent, Button} from "semantic-ui-react";
import
const PostCard = ({post: {body, createdAt, id, username, likeCount, commentCount, likes}}) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src="https://react.semantic-ui"/>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <div className="ui two buttons">
          <Button ba>

          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
