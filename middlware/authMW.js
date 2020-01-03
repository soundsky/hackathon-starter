const jwt = require('jwt')
const moment = require('moment')


const authMW = (req, res, next) => {
    if (!(req.headers && req.headers.authorization)) {
        return res.status(400).json({ status: "Please log in'" });
    }
    const token = req.headers.authorization
    console.log('tokenz', token)
    const payload = jwt.decode(token, 'secret');
    console.log("payload", payload)

    const now = moment().unix();
    // check if the token has expired
    if (now > payload.exp) {
        callback("Token has expired.")
    }

}



module.exports = authMW
