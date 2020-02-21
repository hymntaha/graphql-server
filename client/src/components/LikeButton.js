import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import gql from 'graphql-tag';

import {Button, Icon, Label} from "semantic-ui-react";

function LikeButton({post: {id, likeCount, likes}}) {
  <Button as='div' labelPosition='right' basic onClick={likePost}>
    <Button color='teal'>
      <Icon name='heart' />
      Like
    </Button>
    <Label basic color='teal' pointing='left'>
      {likeCount}
    </Label>
  </Button>
}



export default LikeButton;
