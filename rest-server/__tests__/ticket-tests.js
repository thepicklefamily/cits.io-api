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
