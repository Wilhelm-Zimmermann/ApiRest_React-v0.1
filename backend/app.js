const app = require('./server')
const http = require('http')
const port = process.env.PORT || 8081

const server = http.createServer(app)

// require the posts route
const postsRoute = require('./app/routes/posts')
const userRoute = require('./app/routes/user')

// all thing after the '/' is the postRoute
app.use('/',postsRoute)
app.use('/user',userRoute)

server.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})
