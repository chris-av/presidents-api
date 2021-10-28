require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


const startServer = async () => {

  try {
  
    const uri = `mongodb+srv://chris-admin:${process.env.MONGODB_PASSWORD}@cluster0.orpih.mongodb.net/presidents-api?retryWrites=true&w=majority`
    const server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers
    });
    
    server.applyMiddleware({ app });

    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err) => {
      if (err) throw err;
      console.log('starting mongo server ... ');
    });

    
    app.listen({ port: port }, () => {
      console.log(`launching app on port http://localhost:${port}${server.graphqlPath}`);
    });  

  } catch (err) {
    console.log('could not connect ... ');
    console.log(err);
  }

};


startServer();

