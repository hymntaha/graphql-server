import React from "react";
import {Form} from "semantic-ui-react";
import {useForm} from "../util/hooks";

function PostForm() {
  return(
    <Form onSubmit={onSubmit}>
      <h2>Create a post:</h2>
      <Form.Field>
        <Form.Input>

        </Form.Input>
      </Form.Field>
    </Form>
  )
}

export default PostForm
