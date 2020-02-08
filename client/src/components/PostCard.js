import React from 'react';
import {Link} from "react-router-dom";

import {Card, Icon, Label, Image, CardContent, Button} from "semantic-ui-react";
import moment from "moment";

const PostCard = ({post: {body, createdAt, id, username, likeCount, commentCount, likes}}) => {
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
       <p>Buttons here</p>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
