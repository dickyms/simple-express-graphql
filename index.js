const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function run() {
    await server.start()
    server.applyMiddleware({ app, path: "/percobaan" }); //default nilai path adalah graphql
}

run();

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000/percobaan`)
);