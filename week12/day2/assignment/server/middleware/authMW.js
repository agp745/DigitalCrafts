const jwt = require('jsonwebtoken')
const models = require('../models')
const { Op } = require('sequelize')

const authenticate = (req, res, next) => {

    const header = req.headers.authorization
    
    if(header) {
        const token = header.split(' ')[1]
        const decoded = jwt.verify(token, 'secret_key')
        
        const authUser = models.User.findOne({
            where: {
                [Op.or]:
                    [{username: decoded}, {email: decoded}]
            }
        })

        if(authUser) {
            next()
        } else {
            res.json({success: false, error: 'unable to authenticate'})
        }
    } else {
        res.json({success: false, error: 'required authorization headers missing'})
    }
}

module.exports = authenticate