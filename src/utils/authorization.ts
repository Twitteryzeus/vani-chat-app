import * as jwt from 'jsonwebtoken'
import { config } from '../config/index.ts'

export const encrypt = (payload: object = {}): string => jwt.sign(payload, config.JWT_SECRET_KEY)

export const decrypt = (token: string = ''): any | Error => {
  let decodedPayload: object | any = {};
  jwt.verify(token, config.JWT_SECRET_KEY, (err: any, decoded: any) => {
    if (err) throw new Error(err)

    decodedPayload = decoded;
    return true;
  })

  return decodedPayload;
}