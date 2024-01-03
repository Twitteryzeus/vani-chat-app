import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLError, GraphQLSchema } from 'graphql';
import pkg from 'lodash'
const { isEmpty } = pkg;
import { decrypt } from '../utils/authorization.ts'

export function authDirectiveTransformer(schema: GraphQLSchema, directiveName: string) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0];

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (source, args, context, info) {
          try {
            const result = await resolve(source, args, context, info);
            const { req } = context
            const { headers } = req;

            if (isEmpty(headers)) throw new GraphQLError('Headers need to be passed!');

            if (!headers?.token) throw new GraphQLError('Authorization token needs to be passed!');

            const user = decrypt(headers?.token as string)
            if (!user) throw new GraphQLError('Invalid Token!')

            console.log('\n--------------->>',result,'\n');
            
            req.user = user;

            return result;
          } catch (error: any) {
            throw new Error(error?.message as string)
          }
        };
        return fieldConfig;
      }
    },
  });
}