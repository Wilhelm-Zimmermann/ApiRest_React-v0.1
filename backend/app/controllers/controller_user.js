const db = require('../../database/mongodb')
const bcrypt = require('bcrypt')
const secret = require('../../secret/secret.json')
const jwt = require('jsonwebtoken')

exports.newUser = async (req,res) => {
    try{
        let { email, user, password } = req.body

        const hash = await bcrypt.hash(password,10)
        password = hash
    
        const hasUser = await db.collection('users').findOne({user : user})
    
        if(hasUser){
            return res.status(409).send({msg : 'User already exists'})
        }
    
        db.collection('users').insertOne({
            email,
            user,
            password
        },(err,result) => {
            if(err) return res.status(500).send({ error : 'Error on user signup'})
    
            res.status(201).send({msg : 2})
        })
    }catch(err){
        console.log(err)
    }
}

exports.login = async (req,res) => {
    try{
        
        const { email, password } = req.body
    
        const hasEmail = await db.collection('users').findOne({ email : email })
    
        if(!hasEmail){
            return res.status(409).send({ error : 'Email does not exists'})
        }

        db.collection('users').findOne({
            email : email,
            password : bcrypt.compare(password,hasEmail.password,(err,result) => {
                if(err) return res.status(401).send({ error : 'Authentication failed'})

                if(!result) return res.status(401).send({error : 'Password might be invalid'})

                else{
                    const token = jwt.sign({
                        // the user id and user name will be signed to the token
                        user_id : hasEmail._id,
                        user : hasEmail.user
                    },
                        secret.secret, // secret key to the token
                    {
                        expiresIn : '1d' // Time to expire the token
                    })

                    res.status(200).send({
                        success: 'User Authorized',
                        token : token
                    })
                }
            })
        })
    }catch(err){
        console.log(err)
    }


}