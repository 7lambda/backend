const db = require('../data/migrations/dbConfig')

function add(data) {
    return db('attendee').insert(data, ['*'])
 }
 function whosComming(event_id) {
    return db('attendee').where({event_id})
 }
function notComming(user_id) {
    return db('attendee').where({user_id}).del()
 }
module.exports = {
    notComming,
    add,
    whosComming
}
