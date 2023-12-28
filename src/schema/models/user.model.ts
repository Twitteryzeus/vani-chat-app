import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId | undefined

  @Column()
  name: string | undefined

  @Column()
  email: string | undefined

  @Column()
  token: string | undefined
}