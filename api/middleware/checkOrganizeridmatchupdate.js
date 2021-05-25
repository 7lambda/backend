const {UserIdwithEventId} = require('../Events/event-model')

module.exports = async (req, res, next) => {
    const user_id = await UserIdwithEventId(req.params.event_id)
    if(user_id === req.decodedJwt.subject){
        next()
    } else {
        next({status: 401, message:'you are not allow to edit or delete this event'})
    }
  };
  