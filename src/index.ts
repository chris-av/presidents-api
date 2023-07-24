require('dotenv').config();
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import genUri from '@/utils/gen-uri';


const startServer = async () => {
  const NODE_ENV = process.env.NODE_ENV;
  const MONGO_USERNAME = process.env.MONGO_USERNAME;
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

  try {

    const uri = genUri({
      username: MONGO_USERNAME || "",
      password: MONGO_PASSWORD || "",
      env: NODE_ENV || "development",
      port: 27107,
    });

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

