import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import IUserModel from '../Interfaces/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { Token } from '../Interfaces/iToken';
import ILoginBody from '../Interfaces/iLogin';
import jwtUtil from '../utils/jwt.utils';
import { IRole } from '../Interfaces/iUser';
import SequelizeUsers from '../database/models/SequelizeUsers';

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

  public async role(login: ILoginBody): Promise<ServiceResponse<IRole>> {
    const user = await this.userModel.login(login.email);
    if (!user) {
      return {
        status: 'unauthorized',
        data: { message: 'Invalid email or password' },
      };
    }

    const role = {
      role: user.role,
    };

    return {
      status: 'successful',
      data: role,
    };
  }
}
