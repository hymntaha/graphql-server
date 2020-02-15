import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "../util/hooks";
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";

function PostForm() {
  const {values, onChange, onSubmit} = useForm(createPostCallBack,{
    body:''
  })

  const [createPost, {error}] = useMutation(CREATE_POST_MUTATION,{
    variables: values,
    update(proxy, result){
      proxy.readQuery({

      })
      values.body = '';
    }
  })
  function createPostCallback(){
    createPost();
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a post:</h2>
      <Form.Field>
        <Form.Input
          placeholder="Hi World!"
          name="body"
          onChange={onChange}
          value={values.body}
        />
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
}

const CREATE_POST_MUTATION = gql`
    mutation createPost($body: String!){
        createPost(body:$body){
            id body createdAt username
            likes{
                id username createdAt
            }
            likeCount
            comments{
                id body username createdAt
            }
            commentCount
            
        }
    }
`

export default PostForm;
