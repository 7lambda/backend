const db = require('../data/migrations/dbConfig')

function add(data) {
    return db('attendee').insert(data, ['*'])
 }
 function whosComming(event_id) {
    return db('attendee').where({event_id})
 }
function notComming(attend_id) {
    return db('attendee').where({attend_id}).del()
 }
module.exports = {
    notComming,
    add,
    whosComming
}
