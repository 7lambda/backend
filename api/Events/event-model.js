const db = require('../data/migrations/dbConfig')

function getAll() {
    return db('events')
}

  module.exports = {
      getAll,
  }
