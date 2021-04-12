const express = require('express'),
    bodyParser = require('body-parser'),
    multiParty = require('connect-multiparty'),
    app = express()

// the multyparty to receive the body requests on front end
app.use(multiParty())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// the uploads folder will store all images
app.use('/uploads',express.static('uploads'))

// set all response headers
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Allow-Control-Headers','Content-Type,Origin,X-Request-With,Accept,Authorization')
    if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods','POST,GET,PATCH,DELETE,PUT')
		return res.status(200).send({ msg : 'ok'})	
	}
    next()	
})

module.exports = app
