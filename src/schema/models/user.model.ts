import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId | undefined

  @Column()
  name: string | undefined

  @Column()
  email: string | undefined

  @Column()
  token: string | undefined
}

export interface UserModelInterface {
  id: string
  name: string
  email: string
  token: string
}