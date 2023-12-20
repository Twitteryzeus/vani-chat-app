import { DataSource } from "typeorm"
import { config } from '../config/index.ts'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User } from './models/user.model.ts'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const myDataSource = new DataSource({
  type: "mongodb",
  host: config.MONGO.HOST,
  port: parseInt(config.MONGO.PORT || '27017'),
  database: config.MONGO.NAME,
  entities: [User]
})