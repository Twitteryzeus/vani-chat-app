export const typeDefs = `#graphql
  type Query {
    message: String
  }

  type User {
    _id: ID
    name: String
    email: String
    token: String
  }

  type Mutation {
    sendMessage(message: String!): String
    userLogin(data: UserLoginInput!): UserLoginResponse!
  }

  type SubscriptionResponse {
    message: String
  }

  type Subscription {
    messageNotification: SubscriptionResponse
  }

  input UserLoginInput {
    email: String!
    name: String
  }

  type UserLoginResponse {
    data: User!
    message: String
    status: Int
  }
`;