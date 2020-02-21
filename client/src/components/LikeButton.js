import {Button, Icon, Label} from "semantic-ui-react";
import React from "react";

<Button as='div' labelPosition='right' basic onClick={likePost}>
  <Button color='teal'>
    <Icon name='heart' />
    Like
  </Button>
  <Label basic color='teal' pointing='left'>
    {likeCount}
  </Label>
</Button>
