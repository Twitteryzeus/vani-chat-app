const message = (ctx: any, args: any, info: any): string => {
  console.log(`\n${JSON.stringify({ ctx, args, info }, null, 2)}\n`);

  return 'Hello World!';
}

export const resolvers: any = {
  Query: { message }
}