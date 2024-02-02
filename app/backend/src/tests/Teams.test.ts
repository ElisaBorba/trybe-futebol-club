import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import SequelizeTeams from '../database/models/SequelizeTeams';
import { App } from '../app';
// import Example from '../database/models/ExampleModel';
import { Response } from 'superagent';
// import Teams from '../Interfaces/ITeams';
import { teamById } from './mocks/Teams.mocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Teams Endpoint Test', () => {
  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // chaiHttpResponse = await chai.request(app);
  // expect(...)

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });

  it('Retorna o time pelo seu id ', async () => {
    sinon.stub(SequelizeTeams, 'findByPk').resolves(teamById as any);

    const { status, body } = await chai.request(app).get('/teams/5');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(teamById);
  });
});
