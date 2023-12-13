export const typeDefs = `#graphql
  type Query {
    message: String
  }

  type Mutation {
    sendMessage(message: String!): String
  }

  type SubscriptionResponse {
    message: String
  }

  type Subscription {
    messageNotification: SubscriptionResponse
  }
`;