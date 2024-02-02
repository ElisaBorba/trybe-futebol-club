import { Request, Router, Response } from 'express';
import controllers from '../controllers';

const teamsController = new controllers.TeamsController();

const teamsRoutes = Router();

teamsRoutes.get('/', (req: Request, res: Response) =>
  teamsController.getAllTeams(req, res)
);

teamsRoutes.get('/:id', (req: Request, res: Response) =>
  teamsController.findTeamById(req, res)
);

export default teamsRoutes;
