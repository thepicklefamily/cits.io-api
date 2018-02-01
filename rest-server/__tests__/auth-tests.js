const request = require('supertest');
const {app} = require('../src/index.js');

describe('Test signing up a user', () => {
  test('it should sign up a user', () => {
      return request(app).post("/auth/signup", { email: 'hotdog@hotdog.com', username: 'hotdog', password: 'hotdog', type: '1' })
      .then(response => {
        //   console.log('da response', response);
          expect(response.statusCode).toBe(200)
      })
  });
})