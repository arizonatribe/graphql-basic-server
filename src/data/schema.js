const {makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools');
const {resolvers} = require('./resolvers');
const {mocks} = require('./mocks');

const typeDefs = [`
    type Message {
      id: ID!
      channelId: ID!
      content: String!
    }

    type Channel {
      id: ID!
      name: String!
      messages: [Message]
    }

    type Query {
      channels: [Channel]
      messages: [Message]
      channel(id: ID!): Channel
    }

    schema {
      query: Query
    }
`];

const schema = makeExecutableSchema({typeDefs, resolvers});

// addMockFunctionsToSchema({schema, mocks});

module.exports = exports = schema; 

