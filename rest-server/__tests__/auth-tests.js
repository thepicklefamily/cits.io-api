const request = require('supertest');
// const server = require('../src/index.js');
import server from '../src/index.js';  //SEE IF THIS WORKS FIRST. IF DOES, PROBABLY MEANS THE ES6 STUFF WORKS

//added babel presets to package json to hopefully allow for es6. other possible way brian mentioned is to have the
//.babelrc with it in the main rest-server directory


//write what expect for rest of response too


describe('Test Auth', () => {

  test('It should sign up a user', () => {
      return request(server)
      .post("/api/auth/signup", {
        email: 'hotdog@hotdog.com',
        username: 'hotdog',
        password: 'hotdog',
        full_name: 'Hot Dog',
        type: 1
        })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should log in a user', () => {
    return request(server)
    .post("/api/auth/login", { username: 'hotdog', password: 'hotdog' })
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

});