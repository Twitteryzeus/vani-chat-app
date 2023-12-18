import { pubsub as pubsubClient } from '../utils/pubsub-client.ts'

import { MessageMutation } from './messages/message.resolver.ts'
import { UserMutation } from './user/user.resolver.ts'

export const resolvers: any = {
  Query: {  },
  Mutation: { ...MessageMutation, ...UserMutation },
  Subscription: {
    messageNotification: {
      subscribe: () => pubsubClient.asyncIterator('NEW_MESSAGE_RECEIVED')
    }
  }
}