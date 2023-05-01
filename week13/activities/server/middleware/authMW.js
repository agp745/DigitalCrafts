const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {

    const header = req.header['authorization']
    if (header) {
        const token = header.split(' ')[1]
        console.log(token)
        // const username = jwt.verify(us)

        next()
    }
}

module.exports = authenticate