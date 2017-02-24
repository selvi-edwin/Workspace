/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/signups              ->  index
 * POST    /api/signups              ->  create
 * GET     /api/signups/:id          ->  show
 * PUT     /api/signups/:id          ->  update
 * DELETE  /api/signups/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Signup = require('./signup.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      console.log("response in signup controller " + entity);
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Signups
exports.index = function(req, res) {
  Signup.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Signup from the DB
exports.show = function(req, res) {
  Signup.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Signup in the DB
exports.create = function(req, res) {
  console.log("IN Signup Create" + JSON.stringify(req.body));
  Signup.createAsync(req.body.user)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Signup in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Signup.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Signup from the DB
exports.destroy = function(req, res) {
  Signup.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};

