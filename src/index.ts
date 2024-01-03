import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { createServer } from 'http';
import express, { RequestParamHandler } from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { resolvers } from './resolver/index.ts';
import { typeDefs } from './typedefs.ts';
import { config } from './config/index.ts'
import { myDataSource } from './schema/index.ts'
import { context } from './utils/context.ts'

// Create the schema, which will be used separately by ApolloServer and
// the WebSocket server.
let schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();
const httpServer = createServer(app);

// Create our WebSocket server using the HTTP server we just set up.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});
// Save the returned server's info so we can shutdown this server later
const serverCleanup = useServer({ schema }, wsServer);

interface MyApolloServerContext {
  req: RequestParamHandler
}

// Set up ApolloServer.
const server = new ApolloServer({
  schema,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

await server.start();
app.use('/graphql', express.json(), expressMiddleware(server, {
  context
}));

// Now that our HTTP server is fully set up, we can listen to it.
httpServer.listen(config.PORT, async () => {
  console.log(`Server is now running on http://localhost:${config.PORT}/graphql`);
  await myDataSource.initialize();
});