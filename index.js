const bodyParser = require('body-parser')
, express = require('express')
, app = express()
, xhub = require('express-x-hub')
, token = "bar"

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'))

app.get('/', (req, res)=>{
  console.log(req.param('hub.mode'))
  console.log(req.param('hub.challenge'))
  console.log(req.param('hub.verify_token'))
  console.log(req.params)
  console.log("GET here")
  if(req.param('hub.mode') == 'subscribe'
  && req.param('hub.verify_token') == token) {
    res.send(req.param('hub.challenge'))
    }
  })

app.post('/', (req, res)=> {
  console.log("POST here")
  console.log(req.param)
  if(req.param('hub.mode') == 'subscribe'
  && req.param('hub.verify_token') == token) {
    res.send(req.param('hub.challenge'))
  }
})
