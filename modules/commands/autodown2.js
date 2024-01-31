var configCommand = {
    name: 'autodown2',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: '𝐓𝐢𝐞𝐧 𝐢𝐜𝐡',
    usages: '[]',
    cooldowns: 3
},
    axios = require('axios'),
    downloader = require('image-downloader'),
    fse = require('fs-extra'),
    toolsFb = {
        getVideoUrl: async (url) => {
            const res = await axios.get("https://api-thanhali.thanhali.repl.co/fbdownload?apikey=ThanhAliVip_1234567890&url=" + encodeURIComponent(url));
            return res.data.data.medias[res.data.data.medias.length - 1].url;
        }
    },
    path = __dirname + '/cache/statusAuto.json';

async function streamURL(url, mime) {
    // const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    const name = global.utils.randomString(5) + '.' + mime;
    // await downloader.image({
    //     url, dest
    // });
    // setTimeout(j => fse.unlinkSync(j), 60 * 1000, dest);
    // return fse.createReadStream(dest);
    const res = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    res.data.path = name;
    return res.data;
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID),
        arr = arg.event.args,
        regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
        regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
        regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/\w+\/\w?(\/)?/,
        regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `『𝐀𝐔𝐓𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃』\n 𝐁𝐘 𝐍𝐓𝐊\n- Tiêu đề: ${data.title}\n- Lượt thích: ${data.digg_count}\n- Lượt bình luận: ${data.comment_count}\n- Lượt chia sẻ: ${data.share_count}\n- Lượt tải: ${data.download_count}\n\n✿ 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 "❤" 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐀̂𝐦 𝐓𝐡𝐚𝐧𝐡 ✿`, attachment: await streamURL(data.play, 'mp4')
            }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
            })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://api.nambsls.repl.co/youtube/downloader?url=${el}`)).data.data,
                info = (a, b) => `『𝐀𝐔𝐓𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃』\n 𝐁𝐘 𝐍𝐓𝐊\n- Tiêu đề: ${a.title}\n- Thời gian: ${a.duration}`;
            if (data.video.size < 26214400) out({
                body: (info(data, data.video.size)) + '\n\n✿ 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 "❤" 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐀̂𝐦 𝐓𝐡𝐚𝐧𝐡 ✿' + `\n`, attachment: await streamURL(data.video.url, 'mp4')
            }, '', (err, datMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: datMsg.messageID, url_audio: data.video.url
            })); else if (data.music.size < 26214400) out({
                body: (info(data)) + `\n`, attachment: await streamURL(data.video.url, 'mp3')
            });
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
        if (el.includes('facebook.com/story.php') || regEx_facebook.test(el)) {
            const fdl = await toolsFb.getVideoUrl(el);
            // console.log(fdl);
            out({
                body: '✿ 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 "❤" 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐀̂𝐦 𝐓𝐡𝐚𝐧𝐡 ✿', attachment: await streamURL(fdl, 'mp4')
            }, '', async (err, dataMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: dataMsg.messageID, url_audio: fdl,
            }));
        }
        /* END */

        if (regEx_instagram.test(el)) out({
            attachment: await streamURL((idl = (await axios.get(`https://API-ThanhAli.thanhali.repl.co/instagram/downloadpost?apikey=ThanhAliVip_1234567890&url=${el}`)).data, idl[((irx = /\/p\//.test(el)) ? 'display' : 'video') + '_url']), irx ? 'jpg' : 'mp4')
        });
    };
};
async function reactionMsg(arg) {
    if (arg.event.reaction == '❤') // code
    {
        const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d),
            _ = arg.handleReaction;
        if ('url_audio' in _) out({
            body: `『 𝐕𝐎𝐈𝐂𝐄 』`, attachment: await streamURL(_.url_audio, 'mp3')
        }, '', '', _.messageID);
    }
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean' || !!data[arg.event.threadID] ? false : true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s ? '『 𝐁𝐚̣̂𝐭 𝐀𝐮𝐭𝐨𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐔𝐑𝐋 』 ' : '『 𝐓𝐚̆́𝐭 𝐀𝐮𝐭𝐨𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐔𝐑𝐋 』 ') + ' ' + configCommand.name);
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};