import React,{useState} from "react";
import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";
import {Button,Icon, Confirm} from "semantic-ui-react";

function DeleteButton(props) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deletePost] = useMutation(DELETE_POST_MUTATION,{
    update(){

    }
    variables:{
      postId
    }
  })


  return (
    <>
    <Button as="div" color="red" floated="right" onClick={() => console.log('Delete post')}>
      <Icon name="trash" style={{margin:0}}/>
    </Button>
    <Confirm open={confirmOpen} oncancel{()=> setConfirmOpen(false)} onConfirm={deletePost} />
    </>
  );

}

const DELETE_POST_MUTATION =gql`
    mutation deletePost($postId:ID!){
        deletePost($postId: postId)
    }
`

export default DeleteButton
