import * as jwt from 'jsonwebtoken'
import { config } from '../config/index.ts'
const { sign, verify } = jwt.default

export const encrypt = (payload: object = {}): string => sign(payload, config.JWT_SECRET_KEY, {
  expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24
})

export const decrypt = (token: string = ''): any | Error => {
  let decodedPayload: object | any = {};
  verify(token, config.JWT_SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      decodedPayload = false;
      return decodedPayload
    }

    decodedPayload = decoded;
    return true;
  })

  return decodedPayload;
}