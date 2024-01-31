const fs = require("fs");
module.exports.config = {
	name: "adu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "adu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("á đù")==0 || (event.body.indexOf("Á dù")==0)) {
		var msg = {
				body: "Được của ló đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/adu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}