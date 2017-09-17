const data = require('./comments.json')
, _ = require('lodash')

let autoreply = (comment)=>{
  let reply = "blank"
  , datakeys = _.keysIn(data)
  console.log(datakeys)
  comment = _.toLower(comment)
  console.log(comment)
  for(let i = 0; i < datakeys.length; i++) {
    console.log(i)
    console.log(datakeys[i])
    if(comment.includes(datakeys[i])) {
     reply = data[datakeys[i]]
     break
   }
  }
    return reply

}

console.log(autoreply("Hi there"))
module.exports = autoreply
