# Line_bot_quickly

## 前置步驟

先到 [Line Developers](https://developers.line.biz/en/docs/line-login/getting-started/) 註冊一個自己的 channel，直到可以取得自己的 `CHANNEL_SECRET`, `CHANNEL_ACCESS_TOKEN`

## 使用說明

下載此專案
> git clone https://github.com/yiyu0x/Line_bot_quickly && cd Line_bot_quickly

安裝套件
> npm i

將token填入 `.env`檔案中 (line用token來辨認帳號 不要外流!) 

PORT 對應到的是 app.js 中聽的 port 如果要改，記得兩邊都要改
```
CHANNEL_SECRET=<your_secret>
CHANNEL_ACCESS_TOKEN=<your_token>
PORT=3000
```

使用 ngrok 來把外網對應到 local 環境 (方便測試)
> ngrok http 3000

![](https://i.imgur.com/gWxANmN.png)

Line 有限定 webhook 一定要有 SSL 所以選 https 的網址 貼入 webhook 中

我們在 app.js 中有一段程式碼是這樣寫的:
```js
bot.listen('/hook', 3000, function () {
    console.log('listen on 3000 port...');
});
```
listen 的 path 是 hook，所以要記得在 ngrok 的網址後面加上 hook

![](https://i.imgur.com/uxPQLee.png)

填完之後按一下 verify 如果出現 Success 就成功了

此時打開 Line 傳個訊息，試試看是否會回傳!

![](https://i.imgur.com/MNP8Bq4.png)
