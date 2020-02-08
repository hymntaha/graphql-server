import React from 'react';
import {Link} from "react-router-dom";

import {Card, Icon, Label, Image, CardContent, Button} from "semantic-ui-react";
import moment from "moment";

const PostCard = ({post: {body, createdAt, id, username, likeCount, commentCount, likes}}) => {
  function likePost(){
    console.log()
  }
  function commentOnPost() {
    
  }
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src="https://react.semantic-ui"/>
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to{`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button as='div' labelPosition='right' basic onClick={likePost}>
          <Button color='teal'>
            <Icon name='heart' />
            Like
          </Button>
          <Label basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' basic onClick={commentOnPost}>
          <Button color='blue'>
            <Icon name='comments' />
            Like
          </Button>
          <Label basic color='blue' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
