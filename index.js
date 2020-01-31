const { ApolloServer, gql } = require("apollo-server");
const mongoose = require('mongoose')
require('dotenv').config()
const Post = require('./models/Post');

const typeDefs = gql`
  type Query {
    getPosts: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello World!'
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
