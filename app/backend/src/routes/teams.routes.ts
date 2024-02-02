import { Request, Router, Response } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamsController = new TeamsController();

const teamsRoutes = Router();

teamsRoutes.get('/', (req: Request, res: Response) =>
  teamsController.getAllTeams(req, res)
);
teamsRoutes.get('/:id', (req: Request, res: Response) =>
  teamsController.findTeamById(req, res)
);
export default teamsRoutes;
