var clock = require('./clock.js');

var sendTest001 =  [
    {
        type: 'sticker',
        packageId: '1',
        stickerId: '1'
    },
    {
        type: 'location',
        title: '主人現在的位置',
        address: "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
        latitude: 35.65910807942215,
        longitude: 139.70372892916203
    }
];
var sendPong = [
   {
       type: 'text',
       text: 'Pong'
   }
];

/*回傳: 公元*/
var sendTime = [
   {
      type: 'text',
      text: `現在時間是${clock.consoleTime()}`
   }
];

/*回傳: 農曆*/
var sendLuna = [
    {
        type: 'text',
        text: `${clock.lunaDate()}`
    }
];

/*回傳：Github*/
var sendGithub = [
    {
        "type": "text",
        "text": "這是主人的Github"
    },
    {
        "type": "template",
        "altText": "Github Link",
        "template": {
          "type": "buttons",
          "imageAspectRatio": "rectangle",
          "text": "Github: neko0xff",
          "actions": [
            {
              "type": "uri",
              "label": "打開",
              "uri": "https://github.com/neko0xff"
            }
          ]
        }
    }  
];

/*回傳: 新聞媒體*/
var sendNews = [
    {
        "type": "template",
        "altText": "News Link",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "title": "新聞媒體",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "中央社",
                  "uri": "https://www.cna.com.tw/"
                },
                {
                  "type": "uri",
                  "label": "公視",
                  "uri": "https://news.pts.org.tw/"
                },
                {
                  "type": "uri",
                  "label": "華視",
                  "uri": "https://news.cts.com.tw/"
                }
              ]
            }
          ]
        }
    }
];

/*回傳: 資訊相關新聞媒體*/
var sendITNews = [
    {
        "type": "template",
        "altText": "IT News Link",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "title": "硬體類",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "T客邦",
                  "uri": "https://www.techbang.com/"
                },
                {
                  "type": "uri",
                  "label": "xfastest",
                  "uri": "https://news.xfastest.com/"
                },
                {
                  "type": "uri",
                  "label": "HKEPC",
                  "uri": "https://www.hkepc.com/news"
                }
              ]
            },
            {
              "title": "IT類",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "iThome",
                  "uri": "https://www.ithome.com.tw/"
                },
                {
                  "type": "uri",
                  "label": "網管人",
                  "uri": "https://www.netadmin.com.tw/netadmin/zh-tw/"
                },
                {
                  "type": "uri",
                  "label": "資安人",
                  "uri": "https://www.informationsecurity.com.tw/main/index.aspx"
                }
              ]
            }
          ]
        }
    }
];

/*回傳: 資訊相關教學*/
var sendITtech = [
    {
        "type": "template",
        "altText": "IT Tech Website Link",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "title": "伺服器服務架設",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "鳥哥的 Linux 私房菜",
                  "uri": "https://linux.vbird.org/"
                },
                {
                  "type": "uri",
                  "label": "ServerWorld",
                  "uri": "https://www.server-world.info/"
                },
                {
                  "type": "uri",
                  "label": "Arch Linux Wiki",
                  "uri": "https://wiki.archlinux.org/"
                }
              ]
            },
            {
              "title": "程式撰寫",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "iT邦幫忙",
                  "uri": "https://ithelp.ithome.com.tw/"
                },
                {
                  "type": "uri",
                  "label": "巴哈姆特",
                  "uri": "https://forum.gamer.com.tw/B.php?bsn=60292"
                },
                {
                  "type": "uri",
                  "label": "伴伴學Accomdemy",
                  "uri": "https://www.accomdemy.org/"
                }
              ]
            },
            {
              "title": "IoT",
              "text": "網站連結提供如下",
              "actions": [
                {
                  "type": "uri",
                  "label": "超圖解系列",
                  "uri": "https://swf.com.tw/"
                },
                {
                  "type": "uri",
                  "label": "夜市小霸王",
                  "uri": "https://www.nmking.io/index.php/blog/"
                },
                {
                  "type": "uri",
                  "label": "Cavedu",
                  "uri": "https://blog.cavedu.com/"
                }
              ]
            }
          ]
        }
      }
];

/*回傳: 貓圖*/
var sendNeko = [
  {
    "type": "image",
    "originalContentUrl": "https://localhost:3001/cat",
    "previewImageUrl": "https://localhost:3001/cat"
  },
  {
    "type": "text",
    "text": "Meow!"
  }
];


module.exports={
   sendLuna:sendLuna,
   sendPong:sendPong,
   sendTest001:sendTest001,
   sendTime:sendTime,
   sendGithub:sendGithub,
   sendNews:sendNews,
   sendITNews:sendITNews,
   sendITtech:sendITtech,
   sendNeko:sendNeko
};