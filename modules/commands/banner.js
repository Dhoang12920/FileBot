module.exports.config = {
name: "banner",
version: "1.0.0",
hasPermssion: 0,
credits: "chinhle",
description: " gờ chim to ",
commandCategory: "Tạo ảnh",
usages: "text1 = ag[0], text2 = ag[1];",
cooldowns: 5
};
module.exports.run = async ({ event,
    api,
    global,
    Config,
    logger,
    Threads,
    Users,
    args,
    body,
    is }) => {
  try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2],
            text4 = ag[3];
             if (!text1) {
            return api.sendMessage("𝙃𝙖̃𝙮 𝙙𝙪̀𝙣𝙜 /banner list", event.threadID)
        }
          
       if (text1 == "list") {
        if (!text2) {
            return api.sendMessage("𝙇𝙄𝙎𝙏 𝘽𝘼𝙉𝙉𝙀𝙍\n\n𝟭 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙜𝙚𝙢𝙚𝙧 | 𝙩𝙚𝙭𝙩\n𝟮 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙡𝙤𝙫𝙚 | 𝙩𝙚𝙭𝙩\n𝟯 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙨𝙞𝙣𝙚 | 𝙩𝙚𝙭𝙩\n𝟰 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙫𝙞𝙩𝙡𝙚 | 𝙩𝙚𝙭𝙩\n𝟱 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙨𝙚𝙣𝙡𝙤 | 𝙩𝙚𝙭𝙩\n𝟲 /𝙗𝙖𝙣𝙣𝙚𝙧 𝙘𝙝𝙞 | 𝙩𝙚𝙭𝙩", event.threadID)
        }
    }
              
            if (text1 == "gemer") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner gemer| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://apid-3.chinhle4447.repl.co/neon?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
                  if (text1 == "senlo") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner senlo | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://apid-3.chinhle4447.repl.co/chinhdz?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
                if (text1 == "vitle") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner vitle | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://apid-3.chinhle4447.repl.co/vitle?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
                if (text1 == "love") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner love | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://apid-3.chinhle4447.repl.co/love?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
                   if (text1 == "chi") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner chi | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://apid-3.chinhle4447.repl.co/senido?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
               
         
         
        if (text1 == "sine") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner sine | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-12.chinhle4447.repl.co/lq/sinestrea?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
    } catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}

