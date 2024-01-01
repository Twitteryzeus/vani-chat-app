import { authDirectiveTransformer } from './authorize.ts'
import { GraphQLSchema } from 'graphql'

export const directiveSchema = (schema: GraphQLSchema): GraphQLSchema => {
  schema = authDirectiveTransformer(schema, 'auth');
  return schema;
}