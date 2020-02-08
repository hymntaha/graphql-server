import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
