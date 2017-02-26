const express = require('express')
const app = express()
let config = require('./config/config')
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))

require('./routes/api')(app)

var mongoose = require('mongoose')
mongoose.connect(config.mongoURI[app.settings.env])

app.listen(8000, function(){
  console.log('listening on 8000')
})
module.exports = app
