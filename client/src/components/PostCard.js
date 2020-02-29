import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import MyPopup from "../util/MyPopup";

import { Card, Icon, Label, Image, Popup, Button } from "semantic-ui-react";
import moment from "moment";
import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) => {
  const { user } = useContext(AuthContext);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src="https://react.semantic-ui" />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Popup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue">
              <Icon name="comments" />
              Like
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </Popup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
