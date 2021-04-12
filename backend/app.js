const app = require('./server')
const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer(app)

// require the posts route
const postsRoute = require('./app/routes/posts')

// all thing after the '/' is the postRoute
app.use('/',postsRoute)


server.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})