// justin's slides on testing at https://docs.google.com/presentation/d/1b_VWq8p1R8onOTmHLuXT4BdpSexZFzZ1uone8EprPZ0/edit?ts=5a67a475#slide=id.p23


var chai = require('chai');  
var expect = chai.expect;    // Using Expect style
// var assert = chai.assert;    // Using Assert style
// var should = chai.should();  // Using Should style

var request = require('supertest')('http://localhost:3000');

it('should fetch a created user', function(done) {
  request.post('/api/people', { id: 1, name: 'Tobias Funke' })
    .expect(201)
    .expect(function(res) {
      expect(res.body.name).to.equal('Tobias Funke');
    })
    .end(function(err, res) {
      if (err) { return done(err); }

      request.get('/api/people/1')
        .expect(200)
        .expect(function(res) {
          expect(res.body.name).to.equal('Tobias Funke');
        })
        .end(done);
    });
});