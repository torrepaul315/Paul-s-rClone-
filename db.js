
var environment = process.env.NODE_ENV || 'development';
var config = require('knexfile.js')[environment];
module.exports = require('knex')(config);
//  require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development'])
