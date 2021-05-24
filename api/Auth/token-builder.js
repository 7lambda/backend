const jwt = require( 'jsonwebtoken')
const {JWT_SECRET} = require('./secret')

function tokenBuilder(user){
    const { user_id, username, role_name } = user;
    
    const payload = {
        subject: user_id,
        username,
        role_name
    };
    const options = {
        expiresIn: '1d',
    }
    const token = jwt.sign(
        payload,
        JWT_SECRET,
        options
    )
    return token;
}

module.exports = tokenBuilder