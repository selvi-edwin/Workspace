'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SignupSchema = new Schema({
  name: {
      type: String,
      required: true
    },
  username: {
    type: String,
    required: true
  },
    email: {
      type: String,
      lowercase: true,
      required: true,
    }
});

module.exports = mongoose.model('UserRList', SignupSchema);
