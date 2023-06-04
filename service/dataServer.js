var express = require('express');
const axios = require('axios');
var app = express();
var port = 3001;

var server = app.listen(port,function(){
    console.log(`API Server Started!`);
    console.log(`API Server URL: http://[Server_IP]:%s`,port);
});

app.post('/cat',async function(req,res){
  var URL = 'https://api.thecatapi.com/v1/images/search';
  try{
     const response = await axios.get(URL);
     const jsonData = response.data[0].url;
     console.log(jsonData);
     res.send(jsonData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred');
  };
});