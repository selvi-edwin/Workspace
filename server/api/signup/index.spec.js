'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var signupCtrlStub = {
  index: 'signupCtrl.index',
  show: 'signupCtrl.show',
  create: 'signupCtrl.create',
  update: 'signupCtrl.update',
  destroy: 'signupCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var signupIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './signup.controller': signupCtrlStub
});

describe('Signup API Router:', function() {

  it('should return an express router instance', function() {
    signupIndex.should.equal(routerStub);
  });

  describe('GET /api/signups', function() {

    it('should route to signup.controller.index', function() {
      routerStub.get
                .withArgs('/', 'signupCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/signups/:id', function() {

    it('should route to signup.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'signupCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/signups', function() {

    it('should route to signup.controller.create', function() {
      routerStub.post
                .withArgs('/', 'signupCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/signups/:id', function() {

    it('should route to signup.controller.update', function() {
      routerStub.put
                .withArgs('/:id', 'signupCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/signups/:id', function() {

    it('should route to signup.controller.update', function() {
      routerStub.patch
                .withArgs('/:id', 'signupCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/signups/:id', function() {

    it('should route to signup.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id', 'signupCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
