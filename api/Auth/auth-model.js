const db = require('../data/migrations/dbConfig')

function getByUsername(username){
    return db('users').where({username}).first()
}

function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

 function Add(data) { // done for you
    return db('users').insert(data,  ['*'])
  }

  module.exports = {
      Add,
      findBy,
      getAll,
      getByUsername
  }
