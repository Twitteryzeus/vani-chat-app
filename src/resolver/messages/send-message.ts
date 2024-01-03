import { pubsub as pubsubClient } from '../../utils/pubsub-client.ts'

export const sendMessage = (parent: any, args: any, ctx: any, info: any): string => {
  pubsubClient.publish('NEW_MESSAGE_RECEIVED', { messageNotification: args })
  return 'Message Sent Successfully!';
}