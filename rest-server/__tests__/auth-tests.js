const request = require('supertest');

// const server = require('../src/index.js');
import server from '../src/index.js';  //SEE IF THIS WORKS FIRST. IF DOES, PROBABLY MEANS THE ES6 STUFF WORKS
//added babel presets to package json to hopefully allow for es6. other possible way brian mentioned is to have the
//.babelrc with it in the main rest-server directory


//send brian how they made it not close...

//note that need to reset dbs each time for tests to properly work.need to automate that
//see if can find an easier way to do it from here than jason's way

//write what expect for rest of response too

//FINISH DELETING CONSOLE.LOGS

describe('Test Auth', () => {

  test('It should sign up a user', () => {
      return request(server)
      .post("/api/auth/signup")
      .send({
        email: 'test@test.com',
        username: 'testuser',
        password: 'testing123',
        full_name: 'Testy McTest',
        phonenumber: '3105551234',
        type: 1
        })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should return an error when trying to sign up a user with an email address or username that already exists', () => {
    return request(server)
    .post("/api/auth/signup")
    .send({
      email: 'test@test.com',
      username: 'testuser',
      password: 'testing123',
      full_name: 'Testy McTest',
      phonenumber: '3105551234',
      type: 1
      })
    .then(response => {
      expect(response.statusCode).toBe(401);
    });
});

  test('It should log in a user', () => {
    return request(server)
    .post("/api/auth/login")
    .send({ username: 'testuser', password: 'testing123' })
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('It should return an error when given an invalid username', () => {
    return request(server)
    .post("/api/auth/login")
    .send({ username: 'nottestuser', password: 'testing123' })
    .then(response => {
      expect(response.statusCode).toBe(401);
    });
  });

  test('It should return an error when given an invalid password', () => {
    return request(server)
    .post("/api/auth/login")
    .send({ username: 'testuser', password: 'nottesting123' })
    .then(response => {
      expect(response.statusCode).toBe(401);
    });
  });

});



// // justin's slides on testing at https://docs.google.com/presentation/d/1b_VWq8p1R8onOTmHLuXT4BdpSexZFzZ1uone8EprPZ0/edit?ts=5a67a475#slide=id.p23

// var app = require('../src');
// var chai = require('chai');  
// var expect = chai.expect;    // Using Expect style
// // var assert = chai.assert;    // Using Assert style
// // var should = chai.should();  // Using Should style

// var request = require('supertest')('http://localhost:3000');

// it('should create a user on signup', function(done) {
//   request(app)
//     .post('/auth/signup', { email: 'hotdog@hotdog.com', username: 'hotdog', password: 'hotdog', type: '1' })
//     .expect(201)
//     .expect(function(res) {
//       expect(res.body.username).to.equal('hotdog');
//     })
//     .end(function(err, res) {
//       if (err) { return done(err); }

//       // request.get('/api/people/1')
//       //   .expect(200)
//       //   .expect(function(res) {
//       //     expect(res.body.name).to.equal('Tobias Funke');
//       //   })
//       //   .end(done);
//     });
// });


// var test = require('tape');
// var request = require('supertest');
// var app = require('../src');

// var signObj = { email: 'hotdog@hotdog.com', username: 'hotdog', password: 'hotdog', type: '1' }

// test('create a user on signup', function (t) {
//   request(app)
//     .post('/auth/signup', signObj)
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end(function (err, res) {

//       t.error(err, 'No error');
//       t.same(res.body.username, expectedUsers.username, 'Users as expected');
//       t.end();
//     });
// });
