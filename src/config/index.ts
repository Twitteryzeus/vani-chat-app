import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: parseInt(process.env.PORT || '4000'),
  MONGO: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME
  },
  JWT_SECRET_KEY: `${process.env.JWT_SECRET_KEY}`
}