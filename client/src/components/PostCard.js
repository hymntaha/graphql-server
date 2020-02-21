import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Icon,
  Label,
  Image,
  CardContent,
  Button
} from "semantic-ui-react";
import moment from "moment";
import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) => {
  const { user } = useContext(AuthContext);
  function likePost() {
    console.log();
  }

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
        <LikeButton post={{id, likes, likeCount}}/>
        <Button as="div" labelPosition="right" as={Link} to={`/posts/${id}`}>
          <Button color="blue">
            <Icon name="comments" />
            Like
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <Button
            as="div"
            color="red"
            onClick={() => console.log("Delete post")}
            style={{ margin: 0 }}
            floated="right"
          >
            <Icon name="trash" />
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
