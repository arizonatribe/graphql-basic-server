const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const schema = require('./data/schema');

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3000;

express()
    .use('*', cors({
        origin: `http://localhost:${GRAPHQL_PORT}`
    }))
    .use('/graphql', bodyParser.json(), graphqlExpress({
        schema
    }))
    .use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
    }))
    .listen(GRAPHQL_PORT, () => console.log(
        `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
    ));
