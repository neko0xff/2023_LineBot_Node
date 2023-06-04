const https = require("https");
const express = require("express");
const line = require('@line/bot-sdk');
const axios = require('axios');
var clock=require('./clock.js');
var BotRel=require('./BotReplay.js');
var ConfigParser = require('configparser');
const configService = new ConfigParser();
configService.read('./service/setService.cfg');
configService.sections();

const app = express();
var port = configService.get('Express','Port');
const config = {
   channelAccessToken: configService.get('Line','LINE_ACCESS_TOKEN'),
   channelSecret: configService.get('Line','LINE_Secret')
};
const client = new line.Client(config);

app.get("/", (req, res) => {
  res.send("Line Bot Message API Client is running");
});

app.listen(port, () => {
    console.log(`[${clock.consoleTime()}] Line Bot Message API Client is Start`);
    console.log(`[${clock.consoleTime()}] listening at http://localhost:${port}`);
});

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

/*回覆部分*/
function handleEvent(event) {
    function ReplayMessage(sendStr,replayFcn){
        function message(event){
            if(event.message.text === sendStr ) return client.replyMessage(event.replyToken,replayFcn);
        }
        return message(event);
    }; 
    
    if (event.type !== 'message' || event.message.type !== 'text') return Promise.resolve(null);
   
    console.log(`[${clock.consoleTime()}] 目前收到: ${event.message.text}`);

    ReplayMessage('Test001',BotRel.sendTest001);
    ReplayMessage('Ping',BotRel.sendPong);
    ReplayMessage('現在時間',BotRel.sendTime);
    ReplayMessage('農曆時間',BotRel.sendLuna);
    ReplayMessage('Github',BotRel.sendGithub);
    ReplayMessage('公共性新聞媒體',BotRel.sendNews);
    ReplayMessage('資訊相關新聞媒體',BotRel.sendITNews);
    ReplayMessage('資訊相關教學',BotRel.sendITtech);
    ReplayMessage('喵',BotRel.sendNeko);
}

app.get('/cat',async function(req,res){
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


