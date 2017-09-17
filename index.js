const bodyParser = require('body-parser')
, express = require('express')
, app = express()
, token = "bar"


app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'))

app.get('/facebook', (req, res)=>{
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

app.post('/facebook', (req, res)=> {
  console.log("POST here")
  console.log(req.param)
  if(req.param('hub.mode') == 'subscribe'
  && req.param('hub.verify_token') == token) {
    res.send(req.param('hub.challenge'))
  }
})
