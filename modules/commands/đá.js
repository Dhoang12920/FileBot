module.exports.config = {
  name: "đá",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Đá người bạn muốn",
  commandCategory: "Hành động",
  usages: "đá @tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require("request");
        const fs = require("fs");
        const axios = require("axios");
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        axios.get('https://jrt-api.jrtxtracy.repl.co/kick').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	
	let callback = function () {
    api.sendMessage({body: `[❗] Bạn ${tag} à 🙂\n[🤌] Mình muốn đá chết cm bạn 💥` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + `/cache/kiss.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kiss.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kiss.${ext}`)).on("close", callback);
			})
}