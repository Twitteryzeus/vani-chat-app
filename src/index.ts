import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './typedefs.ts'
import { resolvers } from './resolver.ts'

const server = new ApolloServer({ resolvers, typeDefs });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);