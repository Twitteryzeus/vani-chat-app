export const typeDefs = `#graphql
  directive @auth on FIELD_DEFINITION

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
    sendMessage(message: String!): String @auth
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