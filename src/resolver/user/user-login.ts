import { User, UserModelInterface } from '../../schema/models/user.model.ts'

export const userLogin = (ctx: any, args: any, info: any): UserModelInterface | Error => {
  try {
    if (!args) throw new Error();
    return {
      id: "w+e9vw+9vwevw+ev",
      name: "Brijesh",
      email: "bvlakkad@gmail.com",
      token: "wv5we6vwe6vw"
    }
  } catch (error: any) {
    throw error;
  }
}