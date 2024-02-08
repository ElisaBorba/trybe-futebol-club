import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import IUserModel from '../Interfaces/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { Token } from '../Interfaces/iToken';
import ILoginBody from '../Interfaces/iLogin';
import jwtUtil from '../utils/jwt.utils';
import IUser, { IRole } from '../Interfaces/iUser';

const responseObj = {
  status: 'unauthorized',
  data: { message: 'Invalid email or password' },
};

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async login(login: ILoginBody): Promise<ServiceResponse<Token>> {
    const user = await this.userModel.login(login.email);

    if (!user || !bcrypt.compareSync(login.password, user.password)) {
      return {
        status: 'unauthorized',
        data: { message: 'Invalid email or password' },
      };
    }

    const { id, email } = user;
    const token = jwtUtil.sign({ id, email });

    return { status: 'successful', data: { token } };
  }

  public async role(authorization: string): Promise<ServiceResponse<IRole>> {
    const token = authorization.split(' ')[1];
    try {
      const decoded = await jwtUtil.verify(token);
      const user = (await this.userModel.login(decoded.email)) as IUser;
      return {
        status: 'successful',
        data: { role: user.role },
      };
    } catch (error) {
      return {
        status: 'unauthorized',
        data: { message: 'Token must be a valid token' },
      };
    }
  }
}
