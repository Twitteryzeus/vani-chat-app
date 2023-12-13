import { pubsub, pubsub as pubsubClient } from './utils/pubsub-client.ts'

const message = (ctx: any, args: any, info: any): string => 'Hello World!';

const sendMessage = (ctx: any, args: any, info: any): string => {
  pubsubClient.publish('NEW_MESSAGE_RECEIVED', { messageNotification: args })
  return 'Message Sent Successfully!';
}

export const resolvers: any = {
  Query: { message },
  Mutation: { sendMessage },
  Subscription: {
    messageNotification: {
      subscribe: () => pubsub.asyncIterator('NEW_MESSAGE_RECEIVED')
    }
  }
}