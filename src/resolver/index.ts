import { pubsub as pubsubClient } from '../utils/pubsub-client.ts'

import { MessageMutation } from './messages/message.resolver.ts'

export const resolvers: any = {
  Query: {  },
  Mutation: { ...MessageMutation },
  Subscription: {
    messageNotification: {
      subscribe: () => pubsubClient.asyncIterator('NEW_MESSAGE_RECEIVED')
    }
  }
}