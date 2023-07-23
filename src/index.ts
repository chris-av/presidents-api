require('dotenv').config();
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const startServer = async () => {

  try {
  
    const uri = `mongodb+srv://chris-admin:${process.env.MONGODB_PASSWORD}@cluster0.orpih.mongodb.net/presidents-api?retryWrites=true&w=majority`

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });


   // do I stil need both useNewUrlParser and useUnifiedTopology as passed options in new mongoose?
    await mongoose.connect(uri);


    const { url } = await startStandaloneServer(server, { listen: { port: 8000 } });
    
    app.listen({ port: port }, () => {
      console.log(`launching app on port ${url}`);
    });  

  } catch (err) {
    console.log('could not connect ... ');
    console.log(err);
  }

};


startServer();

