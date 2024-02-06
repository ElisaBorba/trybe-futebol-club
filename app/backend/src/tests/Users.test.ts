import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import SequelizeUser from '../database/models/SequelizeUsers';
import { App } from '../app';
import {
  correctLogin,
  correctUser,
  incorrectEmail,
  errorMessage,
  errorMessage2,
  incorrectPassword,
  withoutEmail,
  withoutPassword,
} from './mocks/User.mocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testa o endpoint POST em /login', () => {
  it('Ao fazer Login com e-mail e senhas válidas, retorna um objeto com a chave token', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(correctUser as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(correctLogin);

    expect(status).to.equal(200);
    expect(body).to.have.property('token');
  });

  it('Ao fazer Login com e-mail inválido, retorna uma mensagem de erro', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(incorrectEmail);

    expect(status).to.equal(401);
    expect(body).to.deep.equal(errorMessage);
  });

  it('Ao fazer Login com senha inválida, retorna uma mensagem de erro', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(incorrectPassword);

    expect(status).to.equal(401);
    expect(body).to.deep.equal(errorMessage);
  });

  it("Ao fazer Login sem o campo de '/email/'preenchido, retorna uma mensagem de erro", async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(withoutEmail);

    expect(status).to.equal(400);
    expect(body).to.deep.equal(errorMessage2);
  });

  it("Ao fazer Login sem o campo '/password/' preenchido, retorna uma mensagem de erro", async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(undefined as any);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(withoutPassword);

    expect(status).to.equal(400);
    expect(body).to.deep.equal(errorMessage2);
  });

  afterEach(sinon.restore);
});
