const {UserInputError} = require('apollo-server');
const Post = require('../../models/Post');

module.exports = {
  Mutation:{
    createComment:async (_,{postId, body}, context)=>{
      const user = checkAuth(context);
      if (body.trim() === '') {
        throw new UserInputError('Empty comment',{
          errors: {
            body: 'Comment body must not empty'
          }
        })
      }
      const post = await findById(postId);
      if (post) {
        post.comment.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        })
        await post.save();
        return post;
      } else throw new UserInputError('Post not found')
    }
  }
}
