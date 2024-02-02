import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import IUserModel from '../Interfaces/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { Token } from '../Interfaces/iToken';
import ILoginBody from '../Interfaces/iLogin';
import jwtUtil from '../utils/jwt.utils';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async login(login: ILoginBody): Promise<ServiceResponse<Token>> {
    if (!login.email || !login.password) {
      return {
        status: 'invalidData',
        data: { message: '"username" and "password" are required' },
      };
    }
    const user = await this.userModel.login(login.email);

    if (!user || !bcrypt.compareSync(login.password, user.password)) {
      return { status: 'notFound', data: { message: 'User not found' } };
    }

    const { id, email } = user;
    const token = jwtUtil.sign({ id, email });

    console.log('TOOOOOKEN', token);

    return { status: 'successful', data: { token } };
  }
}
