module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
	const path = join(__dirname, "cache", "leaveMP4");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveMP4", "random");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const uid = (event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? " đã tự 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺 vào {buoi} {thu} || {gio}\n\n🥲 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝘃𝗮̀ 𝗵𝗲̣𝗻 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶..." : "vì không tương tác nên đã bị 👑 {author} [{uidAuthor}] ⚔️ 𝗸𝗶𝗰𝗸 khỏi nhóm\n𝗧𝗜𝗠𝗘: {buoi} {thu} lúc {gio}\n\n🥲 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝘃𝗮̀ 𝗵𝗲̣𝗻 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶...\n";
	const path = join(__dirname, "cache", "leaveMP4", "random");
	const gifPath = join(__dirname, `random`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "🌸{name} {type}\n🌸𝗣𝗥𝗢𝗙𝗜𝗟𝗘: https://facebook.com/profile.php?id={uid} " : msg = data.customLeave;
   var nameAuthor = await Users.getNameUser(event.author)
	msg = msg.replace(/\{name}/g, name) .replace(/\{type}/g, type).replace(/\{buoi}/g, session).replace(/\{thu}/g, thu).replace(/\{gio}/g, gio).replace(/\{author}/g, nameAuthor).replace(/\{uidAuthor}/g, event.author).replace(/\{uid}/g, uid);

	const randomPath = readdirSync(join(__dirname, "cache", "leaveMP4", "random"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveMP4", "random", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}