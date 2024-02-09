import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import SequelizeTeams from '../database/models/SequelizeTeams';
import { App } from '../app';
import { teamById, allTeams } from './mocks/Teams.mocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Teams Endpoint Test', () => {
  it('Retorna todos os times', async () => {
    sinon.stub(SequelizeTeams, 'findAll').resolves(allTeams as any);

    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(allTeams);
  });

  it('Retorna o time pelo seu id ', async () => {
    sinon.stub(SequelizeTeams, 'findByPk').resolves(teamById as any);

    const { status, body } = await chai.request(app).get('/teams/5');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(teamById);
  });
});
