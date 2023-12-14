import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/.env` });

interface EnvironmentVariables {
  PORT: number,
  DB_HOST: string,
  DB_PORT: number,
  DB_NAME: string,
}

const envVariables: EnvironmentVariables = process.env as unknown as EnvironmentVariables

export const config = {
  PORT: envVariables.PORT,
  MONGO: {
    HOST: envVariables.DB_HOST,
    PORT: envVariables.DB_PORT,
    NAME: envVariables.DB_NAME
  }
}