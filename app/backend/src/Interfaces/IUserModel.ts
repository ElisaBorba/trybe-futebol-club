import IUser from './iUser';
export default interface IUserModel {
  login(email: string): Promise<IUser | null>;
}
