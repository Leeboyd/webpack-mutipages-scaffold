var express = require('express')
var app = express()

app.use(express.static('./dist'))

app.get('/', function (req, res) {
  res.send('Hello Vue')
})

app.listen(8081, function () {
  console.log('listening on port 8081!')
})
