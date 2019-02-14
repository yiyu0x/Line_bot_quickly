require('dotenv').config();
const request = require('request');
const linebot = require('linebot');
const bot = linebot({
  channelId: process.env.PORT,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

let imgURL = ''
let getImage = function() {
  request('http://35.194.134.133:5000/', function (error, response, body) {
    var jsonObject = JSON.parse(body)
    imgURL = jsonObject.url
  })
}
// handle message
bot.on('message', function (event) {
	let = recv_msg = event.message.text
	console.log('message:', recv_msg)
  //replay
  if (recv_msg=='抽') {
    getImage()
    event.reply({
      type: 'image',
      originalContentUrl: imgURL,
      previewImageUrl: imgURL
    });
  }
});

bot.listen('/hook', 3000, function () {
    console.log('listen on 3000 port...');
});