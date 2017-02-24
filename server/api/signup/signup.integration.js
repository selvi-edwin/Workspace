'use strict';

var app = require('..\..\app');
var request = require('supertest');

var newSignup;

describe('Signup API:', function() {

  describe('GET /api/signups', function() {
    var signups;

    beforeEach(function(done) {
      request(app)
        .get('/api/signups')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          signups = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      signups.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/signups', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/signups')
        .send({
          name: 'New Signup',
          info: 'This is the brand new signup!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newSignup = res.body;
          done();
        });
    });

    it('should respond with the newly created signup', function() {
      newSignup.name.should.equal('New Signup');
      newSignup.info.should.equal('This is the brand new signup!!!');
    });

  });

  describe('GET /api/signups/:id', function() {
    var signup;

    beforeEach(function(done) {
      request(app)
        .get('/api/signups/' + newSignup._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          signup = res.body;
          done();
        });
    });

    afterEach(function() {
      signup = {};
    });

    it('should respond with the requested signup', function() {
      signup.name.should.equal('New Signup');
      signup.info.should.equal('This is the brand new signup!!!');
    });

  });

  describe('PUT /api/signups/:id', function() {
    var updatedSignup

    beforeEach(function(done) {
      request(app)
        .put('/api/signups/' + newSignup._id)
        .send({
          name: 'Updated Signup',
          info: 'This is the updated signup!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSignup = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSignup = {};
    });

    it('should respond with the updated signup', function() {
      updatedSignup.name.should.equal('Updated Signup');
      updatedSignup.info.should.equal('This is the updated signup!!!');
    });

  });

  describe('DELETE /api/signups/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/signups/' + newSignup._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when signup does not exist', function(done) {
      request(app)
        .delete('/api/signups/' + newSignup._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
