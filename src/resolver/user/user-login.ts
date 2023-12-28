import { myDataSource } from '../../schema/index.ts'
import { User } from '../../schema/models/user.model.ts'
import { encrypt } from '../../utils/authorization.ts'

export const userLogin = async (ctx: any, args: any, info: any): Promise<object | Error> => {
  try {
    if (!args) throw new Error();
    const response = {
      data: {},
      message: 'User logged-in successfully!',
      status: 200
    };

    const { data } = args;
    const existingUser = await myDataSource.manager.findOneBy(User, {
      email: data.email
    });

    if (!existingUser) {
      const inputForUser = { ...data };
      inputForUser.token = encrypt({ email: data.email })

      const newUser = myDataSource.manager.create(User, inputForUser);
      const newCreatedUser = await myDataSource.manager.save(newUser);

      response.data = newCreatedUser as any
    } else {
      const newToken: string = encrypt({ email: data.email })

      await myDataSource.manager.update(User, { ...data, token: newToken }, { email: data.email });
      response.data = { ...existingUser, token: newToken }
    }

    return response
  } catch (error: any) {
    throw error;
  }
}