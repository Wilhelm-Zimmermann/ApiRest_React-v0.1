const jwt = require('jsonwebtoken')
const secret = require('../secret/secret.json')

exports.private = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,secret.secret)
        req.user = decode
        next()
    }catch(err){
        return res.status(401).send({ error : 'Token invalid'})
    }
}