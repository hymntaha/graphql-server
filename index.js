const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose')
require('dotenv').config()
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

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
