import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import SequelizeMatches from '../database/models/SequelizeMatches';
import { App } from '../app';
import matchesMock from './mocks/Matches.mocks';

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
  afterEach(function () {
    sinon.restore();
  });
});
