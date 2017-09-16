var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var xhub = require('express-x-hub')

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'))

app.get('/', (req, res)=>{
  console.log(req.param)
  console.log(req.params)
  console.log("GET here")
  res.send("bar")
})

app.post('/', (req, res)=> {
  console.log("POST here")
  console.log(req.param)
  res.send(req.param['hub.mode'])
})
