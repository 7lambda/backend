const db = require('../data/migrations/dbConfig')

function addFood(data) {
    return db('foods').insert(data, ['*'])
    
}
function findFoodByEventId(event_id) {
    return db('foods').where({event_id})
}
function comewithoutFood(data) {
    return db('foods').insert(data, ['*'])
}

function assignFoodToAttendee(food_id, user_id) {
    return db('foods').where({food_id}).update({user_id}, ['*'])
}
function nuked(food_id) {
    return db('foods').where({food_id}).del()
 }
module.exports = {
    addFood,
    findFoodByEventId,
    assignFoodToAttendee,
    nuked,
    comewithoutFood
}
