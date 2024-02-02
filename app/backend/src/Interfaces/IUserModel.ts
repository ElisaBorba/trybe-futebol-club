import IUser from './iUser';
import { NewEntity } from './iNewEntity';

export default interface IUserModel {
  login(data: Partial<IUser>): Promise<IUser>;
}
