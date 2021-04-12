const mongoose = require('mongoose')

// connecting to db
mongoose.connect('mongodb://localhost/posts',{useNewUrlParser : true ,useUnifiedTopology : true})
mongoose.set('useCreateIndex',true)
mongoose.Promise = global.Promise

const db = mongoose.connection

module.exports = db