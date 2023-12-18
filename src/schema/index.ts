import { DataSource } from "typeorm"
import { config } from '../config/index.ts'

export const myDataSource = new DataSource({
  type: "mongodb",
  host: config.MONGO.HOST,
  port: config.MONGO.PORT,
  database: config.MONGO.NAME,
})