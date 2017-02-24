/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/reguserlists', require('./api/reguserlist'));
  app.use('/api/signups', require('./api/signup'));
 // app.use('/api/registers', require('./api/register'));
  app.use('/api/things', require('./api/thing'));
//  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
//  api.use('/api/register', require('./api/register'))
//  api.use('/api/'+name,require('./api/'+name));


  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

   /* app.get('/events',function(req,res) {

		res.sendfile(path.resolve(app.get('appPath') +'/home/index.html')); 
	});*/
};
