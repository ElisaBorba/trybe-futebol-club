// import * as sinon from 'sinon';
// import * as chai from 'chai';
// import chaiHttp = require('chai-http');
// import SequelizeUser from '../database/models/SequelizeUsers';
// import { App } from '../app';
// import { teamById, allTeams } from './mocks/Teams.mocks';

// chai.use(chaiHttp);

// const { app } = new App();
// const { expect } = chai;

// describe('Teams Endpoint Test', () => {
//   it('Retorna o time pelo seu id ', async () => {
//     sinon.stub(SequelizeUser, 'findByPk').resolves(teamById as any);

//     const { status, body } = await chai.request(app).get('/teams/5');
//     expect(status).to.equal(200);
//     expect(body).to.deep.equal(teamById);
//   });
// });
