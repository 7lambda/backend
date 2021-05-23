const knex = require('knex');
const knexConfig = require('../knexfile.js');
const {NODE_ENV} = require('../api/Auth/secret')

module.exports = knex(knexConfig[NODE_ENV]);
