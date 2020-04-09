const express = require('express');
const {
    ApolloServer
} = require('apollo-server-express');
const ratingSchema = require('./schema/rating')
const ratingResolver = require('./resolvers/rating')
const ENV = require('./env')
const server = new ApolloServer({
    introspection: true,
    typeDefs: ratingSchema,
    resolvers: ratingResolver
});

const app = express();
server.applyMiddleware({
    app
});

app.listen({
        port: ENV.SERVER_PORT
    }, () =>
    console.log(`🚀 Server ready at http://localhost:${ENV.SERVER_PORT}${server.graphqlPath}`)
);