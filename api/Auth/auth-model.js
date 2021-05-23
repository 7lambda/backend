const db = require('../data/migrations/dbConfig')


function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

 function Add(data) { // done for you
    return db('users').insert(data,  ['user_id', 'username'])
  }

  module.exports = {
      Add,
      findBy,
      getAll,
  }
