require('dotenv').config();

const linebot = require('linebot');
const bot = linebot({
  channelId: process.env.PORT,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// handle message
bot.on('message', function (event) {
	recv_msg = event.message.text
	console.log('recv message:', recv_msg)
	replay_msg = 'im a bot, your message is:\n' + recv_msg
  //replay
  event.reply(replay_msg).then(function (data) {

  }).catch(function (error) {

  });
});

bot.listen('/hook', 3000, function () {
    console.log('listen on 3000 port...');
});