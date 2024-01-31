module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");//D/MM/YYYY
	var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  const hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Bot của RqzaX <3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`» 𝙆𝙀𝙏 𝙉𝙊𝙄 𝙏𝙃𝘼𝙉𝙃 𝘾𝙊𝙉𝙂«\n┈┈ ╲┈┈┈┈┈╱┈┈\n┈┈ ╱▔▔▔▔▔╲┈┈\n┈┈┃┈▇┈┈▇┈┃┈┈\n╭╮┣━━━━━━┫╭╮\n┃┃┃┈┈┈┈┈┈┃┃┃\n╰╯┃┈┈┈┈┈┈┃╰╯\n┈┈╰┓┏━━┓┏╯┈┈\n┈┈┈╰╯┈┈╰╯\n◆━━━━━━━━━━━━━◆\n➽ 𝑩𝒐𝒕 Đ𝒄 Đ𝒊𝒆̂̀𝒖 𝑯𝒂̀𝒏𝒉 𝑩𝒚 Lưu Hoàng \n➽ 𝑳𝒊𝒏𝒌 𝑭𝑩 𝑨𝑫𝑴𝑰𝑵\n📲https://www.facebook.com/100054607853754\n\n✘▬ ▬ ▬ ▬𝑅𝑈𝐿𝐸▬ ▬ ▬ ▬✘\n➢ 𝑲 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕 , 🔞 \n➢ 𝑲 𝑳𝒂̆𝒏𝒈 𝑴𝒂̣ 𝑪𝒉𝒖̛̉𝒊 𝑩𝒐𝒕\n➢ 𝑻𝒐̂𝒏 𝑻𝒓𝒐̣𝒏𝒈 𝑨𝑫𝑴𝑰𝑵 𝒗𝒂̀ 𝑩𝒐𝒕\n➢ 𝑴𝒐̂̃𝒊 𝑵𝒉𝒐́𝒎 𝑪𝒉𝒊̉ Đ𝒖̛𝒐̛̣𝒄 1 𝑩𝒐𝒕 , 𝑵𝒆̂́𝒖 𝑷𝒉𝒂́𝒕 𝑯𝒊𝒆̣̂𝒏 𝑩𝒐𝒕 𝑺𝒆̃ 𝑶𝒖𝒕 🚫\n\n✘▬ ▬ 𝐇𝐮̛𝐨̛́𝐧𝐠 𝐃𝐚̂̃𝐧 𝐒𝐃 ▬ ▬✘\n➢ 𝑮𝒐̃ .𝑴𝒆𝒏𝒖  Đ𝒆̂̉ 𝑿𝒆𝒎 𝑳𝒆̣̂𝒏𝒉\n━━━━━━━━━━━━━\n𝗟𝘂́𝗰: ${gio}\n𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘀𝗮̀𝗶 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉ \n\n𝗧𝗵𝗮̉ ❤️ 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗼𝘁 𝗻𝗼́ 𝘀𝗲̃ 𝘁𝘂̛̣ 𝗴𝗼̛̃ 𝗱𝗮̂́𝘆 =))`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🇻🇳 💗𝙃𝙚𝙡𝙡𝙤 𝙘𝙤𝙣 𝙫𝙤̛̣ {name}💗.\n𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 đã đến với {threadName}.\n{type} là 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 thứ {soThanhVien} 𝙘𝙪̉𝙖 𝙣𝙝𝙤́𝙢!. 𝙏𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙣𝙝𝙞𝙚̂̀𝙪 𝙫𝙖̀𝙤 𝙣𝙝𝙖 𝙠𝙝𝙤̂𝙣𝙜 𝙡𝙖̀ 𝙖̆𝙣 𝙠𝙞𝙘𝙠 đ𝙖̂́𝙮 ♥\nChúc bạn 1 buổi {session} vui vẻ\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: {time}": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝗖𝗮́𝗰 𝗰𝗮̣̂𝘂' : '𝗰𝗮̣̂𝘂')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝗦𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝗧𝗿𝘂̛𝗮 " :
    hours > 12 && hours <= 18 ? "𝗖𝗵𝗶𝗲̂̀𝘂 " : "𝗧𝗼̂́𝗶")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                       }
