const db = require('../data/migrations/dbConfig')

function add(data) {
    return db('request').insert(data, ['*'])
 }
 function findbyUser(user_id) {
    return db('request').where({user_id})
 }
function nuked(request_id) {
    return db('request').where({request_id}).del()
 }
module.exports = {
    nuked,
    add,
    findbyUser
}
