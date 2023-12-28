import { DataSource } from "typeorm"
import { config } from '../config/index.ts'
import { User } from './models/user.model.ts'

export const myDataSource = new DataSource({
  type: "mongodb",
  host: config.MONGO.HOST,
  port: parseInt(config.MONGO.PORT || '27017'),
  database: config.MONGO.NAME,
  entities: [User]
})