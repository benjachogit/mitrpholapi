var express = require('express')
var request = require('request')

var cors = require('cors')
const bodyParser = require('body-parser')

  app = express()
  port = process.env.PORT || 1515;


app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
app.listen(port);

app.get('/login/:username/:password', function (req,res){
   var options ={
       'method': 'POST',
       'url':'https://api.mitrphol.com:3301/oauth/login',
       'header':{
            'Content-Type':'application/x-www-form-urlencoded'
       },
       form: {
            username: req.params.username,
            password: req.params.password
       }
   }

   request(options, function (error, response) {
       if(error) throw new Error(error);
       res.json(response.statusCode)
       console.log(response)
   })
});

