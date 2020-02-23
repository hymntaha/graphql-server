import React from "react";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {Grid, Image, Card} from "semantic-ui-react";
import moment from "moment";

function SinglePost(props) {
  const postId = props.match.params.postId;

  const {data: {getPost}} = useQuery(FETCH_POST_QUERY,{
    variables:{
      postId
    }
  })
  let postMarkup;

  if (!getPost) {
    postMarkup = <p>Loading post..</p>
  } else {
    const {id, body, createdAt, username, comments, likes, likeCount, commentCount} = getPost;

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column widht={2}>
            <Image src="https://react.semantic-ui.com/images/avatar/large/molly.png" size="small" float="right"/>
          </Grid.Column>
          <Grid.Column widht={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  {username}
                </Card.Header>
                <Card.Meta>{moment(createdAt.fromNow())}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commnetCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default SinglePost;
