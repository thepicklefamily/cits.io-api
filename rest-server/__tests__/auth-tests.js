import request from 'supertest';
import server from '../src/index.js';

//to drop and create tables - SHOULD MATCH WHAT'S IN src\config\database\setup.js but without "process.exit()""
import {
  createUserTable,
  dropUserTable,
  createDatabase,
  dropDatabase,
  createPropertyTable,
  dropPropertyTable,
  createPhonebookTable,
  dropPhonebookTable,
  createArticleTable,
  dropArticleTable,
  createTicketTable,
  dropTicketTable
} from '../src/lib/SQL/index.js';

beforeAll( async () => {
  await dropDatabase();
  await dropArticleTable();
  await dropTicketTable();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropPropertyTable();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createPhonebookTable();
  await createTicketTable();
  await createArticleTable();
});

//The tests:
describe('Test Auth', () => {

  test('It should sign up a user', async () => {
      const response = await request(server).post('/api/auth/signup')
      .send({
        email: 'test@test.com',
        username: 'testuser',
        password: 'testing123',
        full_name: 'Testy McTest',
        phonenumber: '3105551234',
        type: 1
        });
      expect(response.statusCode).toBe(200);
  });

  test('It should return an error to client when trying to sign up a user with an email address or username that already exists', async () => {
    const response = await request(server).post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      username: 'testuser',
      password: 'testing123',
      full_name: 'Testy McTest',
      phonenumber: '3105551234',
      type: 1
      })
    expect(response.statusCode).toBe(400);
  });

  test('It should log in a user', async () => {
    const response = await request(server).post('/api/auth/login')
    .send({ username: 'testuser', password: 'testing123' })
    expect(response.statusCode).toBe(200);
  });

  test('It should return an error when given a username that doesn\'t exist', async () => {
    const response = await request(server).post('/api/auth/login')
    .send({ username: 'nottestuser', password: 'testing123' })
    expect(response.statusCode).toBe(401);
  });

  test('It should return an error when given an invalid password', async () => {
    const response = await request(server).post('/api/auth/login')
    .send({ username: 'testuser', password: 'nottesting123' })
    expect(response.statusCode).toBe(401);
  });

});