import SequelizeUsers from '../database/models/SequelizeUsers';
import IUserModel from '../Interfaces/IUserModel';
import { NewEntity } from '../Interfaces/iNewEntity';
import IUser from '../Interfaces/iUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUsers;

  async login(data: NewEntity<IUser>): Promise<IUser> {
    const dbData = await this.model.create(data);

    const { id, email, password }: IUser = dbData;
    return { id, email, password };
  }
}
