import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeTeams from './SequelizeTeams';

class SequelizeMatches extends Model<
  InferAttributes<SequelizeMatches>,
  InferCreationAttributes<SequelizeMatches>
> {
  declare id: CreationOptional<number>;

  declare homeTeamId: number;

  declare homeTeamGoals: number;

  declare awayTeamId: number;

  declare awayTeamGoals: number;

  declare inProgess: boolean;
}

SequelizeMatches.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team_id',
      references: {
        model: 'teams',
        key: 'id',
      },
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team_goals',
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'away_team_id',
      references: {
        model: 'teams',
        key: 'id',
      },
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'away_team_goals',
    },
    inProgess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'in_progress',
    },
  },
  {
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
    underscored: true,
  }
);

SequelizeMatches.belongsTo(SequelizeTeams, {
  foreignKey: 'home_team_id',
  as: 'homeTeam',
});

SequelizeMatches.belongsTo(SequelizeTeams, {
  foreignKey: 'away_team_id',
  as: 'awayTeam',
});

export default SequelizeMatches;
