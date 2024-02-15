import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SequelizeUser from '../database/models/SequelizeUsers';
import { App } from '../app';
import jwtUtils from '../utils/jwt.utils';
import userMock from './mocks/User.mocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testa o endpoint POST em /login', () => {
  it('Ao fazer Login com e-mail e senhas válidas, retorna um objeto com a chave token', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(userMock.correctUser as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userMock.correctLogin);

    expect(status).to.equal(200);
    expect(body).to.have.property('token');
  });

  it('Ao fazer Login com e-mail inválido, retorna uma mensagem de erro', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userMock.incorrectEmail);

    expect(status).to.equal(401);
    expect(body).to.deep.equal(userMock.errorMessage);
  });

  it('Ao fazer Login com senha inválida, retorna uma mensagem de erro', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userMock.incorrectPassword);

    expect(status).to.equal(401);
    expect(body).to.deep.equal(userMock.errorMessage);
  });

  it("Ao fazer Login sem o campo de '/email/'preenchido, retorna uma mensagem de erro", async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userMock.withoutEmail);

    expect(status).to.equal(400);
    expect(body).to.deep.equal(userMock.errorMessage2);
  });

  it("Ao fazer Login sem o campo '/password/' preenchido, retorna uma mensagem de erro", async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userMock.withoutPassword);

    expect(status).to.equal(400);
    expect(body).to.deep.equal(userMock.errorMessage2);
  });

  afterEach(sinon.restore);
});

describe('Testa o endpoint GET em /login/role', () => {
  it('Ao entrar na rota com token válido retorna um objeto com sua devida função (role)', async () => {
    const verifyStub = sinon.stub(jwtUtils, 'verify');
    verifyStub.returns(userMock.payload);

    const mockFindOneReturn = SequelizeUser.build(userMock.correctUser);
    sinon.stub(SequelizeUser, 'findOne').resolves(mockFindOneReturn);

    const { status, body } = await chai
      .request(app)
      .get('/login/role')
      .set('Authorization', 'genericToken');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(userMock.role);
  });

  afterEach(sinon.restore);
});
