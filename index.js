const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port);
console.log('Máy chủ bắt đầu tại lúc http://localhost:' + port);


logger("Đã mở sever wed máy chủ ...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Bắt Đầu ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Đang khởi động lại ...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/RqzaX040/Global-Hokai/main/package.json").then((res) => {
    logger(res['data']['name'], "[ TÊN PR0JECT ]");
    logger("Version: " + res['data']['version'], "[ PHIÊN BẢN ]");
    logger(res['data']['description'], "[ LƯU Ý ]");
  
});
startBot();

const config = {
  status: true,
  name: 'Mirai ',
  timestamp: Date.now()
};

if (config.status == false) return
var username = process.env.REPL_OWNER
if (username !== undefined) {
  var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
  logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ KIỂM TRA HOST ]');
  if (process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ KIỂM TRA HOST ]');
  logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với UptimeRobot cho bạn!', '[ KIỂM TRA HOST ]');
  connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
  try {
    const res = (await axios.get(`https://Sever-Uptime.duongkhangxxxx.repl.co/?add=${url}`)).data;
    if (res.error) return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]');
    return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]');
  }
  catch {
    return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]');
  }
};