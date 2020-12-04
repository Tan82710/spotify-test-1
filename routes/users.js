var express = require('express');
var router = express.Router();
var dotenv = require('dotenv')
dotenv.config()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET Data Playlist */
router.post('/data', function (req, res, next) {
  console.log(req.body)
})

function data(){
    var value = 'HELLO THERE'
    return value
}

// module.exports = { 
//   router:router,
//   data:data
// }
module.exports = router