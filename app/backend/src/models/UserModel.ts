import SequelizeUsers from '../database/models/SequelizeUsers';
import IUserModel from '../Interfaces/IUserModel';
import IUser from '../Interfaces/iUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUsers;

  async login(email: string): Promise<IUser | null> {
    const dbUser = await this.model.findOne({ where: { email } });

    return dbUser;
  }
}
