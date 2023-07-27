require('dotenv').config();
import http from 'http'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
const app = express();
const PORT = process.env.PORT || 8000;
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import genUri from '@/utils/gen-uri';


const httpServer = http.createServer(app);


const startServer = async () => {
  const NODE_ENV = process.env.NODE_ENV;
  const MONGO_USERNAME = process.env.MONGO_USERNAME;
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

  console.log('detecting the following env variables : ');
  console.log({ NODE_ENV, MONGO_USERNAME, MONGO_PASSWORD });
  console.log('');

  try {

    const uri = genUri({
      username: MONGO_USERNAME || "",
      password: MONGO_PASSWORD || "",
      env: NODE_ENV || "development",
      port: 27107,
    });

    console.log('connecting to mongo database at : ' + uri);
    await mongoose.connect(uri);



    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
      cors(),
      bodyParser.json(),
      expressMiddleware(server, {}),
    );



    httpServer.listen(PORT, () => {
      console.log(`Server ready at port : ${PORT}`);
    });

  } catch (err) {
    console.log('could not connect ... ');
    console.log(err);
  }

};


startServer();

