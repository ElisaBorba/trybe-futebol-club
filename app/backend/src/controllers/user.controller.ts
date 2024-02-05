import { Request, Response } from 'express';
import UserService from '../services/usersService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async login(req: Request, res: Response) {
    const serviceResponse = await this.userService.login(req.body);

    if (serviceResponse.status !== 'successful') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async role(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { status, data } = await this.userService.role(authorization);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
