import IBoard from './IBoard';

export default interface IBoardModel {
  findAll(): Promise<IBoard[]>;
}
