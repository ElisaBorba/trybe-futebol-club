import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeMatches from '../database/models/SequelizeMatches';
import { App } from '../app';
import matchesMock from './mocks/Matches.mocks';
import jwtUtils from '../utils/jwt.utils';
import UserMocks from './mocks/User.mocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Matches Endpoint Test', () => {
  it('Retorna todas as partidas', async () => {
    sinon
      .stub(SequelizeMatches, 'findAll')
      .resolves(matchesMock.allMatches as any);

    const { status, body } = await chai.request(app).get('/matches');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesMock.allMatches);
  });

  it('Retorna as partidas em andamento, quando filtradas através do parâmetro query', async () => {
    sinon
      .stub(SequelizeMatches, 'findAll')
      .resolves(matchesMock.allMatchesInProgress as any);

    const { status, body } = await chai
      .request(app)
      .get('/matches?inProgress=true');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesMock.allMatchesInProgress);
  });

  it('Retorna as partidas finalizadas, quando filtradas através do parâmetro query', async () => {
    sinon
      .stub(SequelizeMatches, 'findAll')
      .resolves(matchesMock.allFinishedMatches as any);

    const { status, body } = await chai
      .request(app)
      .get('/matches?inProgress=false');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchesMock.allFinishedMatches);
  });

  it('Cadastra uma nova partida em andamento no banco de dados', async () => {
    const verifyStub = sinon.stub(jwtUtils, 'verify');
    verifyStub.returns(UserMocks.payload);
    sinon
      .stub(SequelizeMatches, 'create')
      .resolves(matchesMock.matchCreated as any);
      

    const { status, body } = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', 'genericToken')
      .send(matchesMock.matchToCreate);
    expect(status).to.equal(201);
    expect(body).to.deep.equal(matchesMock.matchCreated);
  });

  it('Não é possível cadastrar uma partida com times iguais', async () => {
    const verifyStub = sinon.stub(jwtUtils, 'verify');
    verifyStub.returns(UserMocks.payload);
    sinon
      .stub(SequelizeMatches, 'create')
      .resolves(matchesMock.errResponseEqualTeams as any);
      

    const { status, body } = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', 'genericToken')
      .send(matchesMock.equalTeams);
    expect(status).to.equal(422);
    expect(body).to.deep.equal(matchesMock.errResponseEqualTeams);
  });

  afterEach(function () {
    sinon.restore();
  });
});
