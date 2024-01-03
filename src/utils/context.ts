import { GraphQLError } from "graphql";
import pkg from "lodash";
import { decrypt } from "./authorization.ts";
const { isEmpty } = pkg;

export const context = async (contextPayload: any): Promise<any | Error> => {
  const req = contextPayload?.req
  const { headers } = req;

  if (isEmpty(headers)) throw new GraphQLError('Headers need to be passed!');

  if (!headers?.token) throw new GraphQLError('Authorization token needs to be passed!');

  const user = decrypt(headers?.token as string)
  if(!user) throw new GraphQLError('Invalid Token!');

  req.user = user;
  return { req }
}