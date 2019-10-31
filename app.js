const express = require("express")
const app = express()
const path = require("path")
// setting view engine to ejs
app.set('view engine', 'ejs')
// telling express what folder my assets are in
app.use(express.static('views'))
// serving the static pages
app.get('/', function(req, res) {
    res.sendFile(path.join('/home/jacob/Developer/Examples/node-examples/first-server/views/' + 'about.html'))
})
app.get('/', function(req, res) {
    res.sendFile(path.join('/home/jacob/Developer/Examples/node-examples/first-server/views/' + 'myProjects.html'))
})
app.get('/', function(req, res) {
    res.sendFile(path.join('/home/jacob/Developer/Examples/node-examples/first-server/views/' + 'contact.html'))
})
// running the server on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})