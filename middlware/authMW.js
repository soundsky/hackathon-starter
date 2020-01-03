const jwt = require('jwt-simple')
const moment = require('moment')


const authMW = (req, res, next) => {
    if (!(req.headers && req.headers.authorization)) {
        return res.status(400).json({ status: "Please log in'" });
    }
    const token = req.headers.authorization
    console.log('tokenz', token)
    let payload
    try {
        payload = jwt.decode(token, 'secret');
    } catch (error) {
        return res.json({ error })
    }
    console.log("payload", payload)



    const now = moment().unix();
    // check if the token has expired
    if (now > payload.exp) {
        return res.json({ author })
    }

    const user = payload.sub

    if (user) {
        req.userID = payload.id
        return next()
    }

    return res.json({ msg: "Please log in", authorized: false })
}



module.exports = authMW
