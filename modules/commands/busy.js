module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 1,
	credits: "Henry",
	description: "Bật hoặc tắt chế độ busy",
  usages: "[lí do]",
  commandCategory: "Tiện ích",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`Welcome Back!! 🥰`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("Trong lúc bạn vắng mặt thì không có ai nhắc đến bạn cả", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("Danh sách những người nhắc bạn trong lúc bạn vắng mặt:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "Vừa tag bạn 1 lần" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`${name.replace("@", "")} hiện đang bận ${infoBusy.lido ? ` với lí do: ${infoBusy.lido}.` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
  const axios = require("axios")
	const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const { threadID, senderID, messageID, body } = event;
  const res = await axios.get("https://APIURL.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
       var msg = (content.length == 0) ? `🌺──── •Busy• ────🌺\n\n》Bạn vừa bật Busy\n》Lí do: invisible\n\n🌺───「${timeNow}」───🌺` : `🌺──── •Busy• ────🌺\n\n》Bạn vừa bật Busy\n》Lí do: ${content}\n\n🌺───「${timeNow}」───🌺`;
        return api.sendMessage({body: msg, attachment: download}, threadID, messageID);
    }
}
