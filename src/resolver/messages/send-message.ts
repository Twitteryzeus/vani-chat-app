import { pubsub as pubsubClient } from '../../utils/pubsub-client.ts'

export const sendMessage = (ctx: any, args: any, info: any): string => {
  pubsubClient.publish('NEW_MESSAGE_RECEIVED', { messageNotification: args })
  return 'Message Sent Successfully!';
}