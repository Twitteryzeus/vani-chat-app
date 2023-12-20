import { myDataSource } from '../../schema/index.ts'
import { User, UserModelInterface } from '../../schema/models/user.model.ts'

export const userLogin = async (ctx: any, args: any, info: any): Promise<UserModelInterface | Error> => {
  try {
    if (!args) throw new Error();

    const {data} = args;
    const existingUser = await myDataSource.manager.findOneBy(User, {
      email: data.email
    });

    console.log(`\nUSER LOG----------->>\t${JSON.stringify(existingUser,null,2)}\n`);
    

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