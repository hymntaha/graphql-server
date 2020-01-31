const { ApolloServer, gql } = require("apollo-server");
const mongoose = require('mongoose')
require('dotenv').config()
const Post = require('./models/Post');
const typeDefs = require('./graphql/typeDefs');

const resolvers = {
  Query: {
    async getPosts(){
      try{
        const posts = await Post.find();
        return posts;
      } catch(err){
        throw new Error(err)
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
}).then(() => console.log('DB connected'));

server.listen({ port: 5000 }).then(res => {
  console.log(`Server is running at ${res.url}`);
});
