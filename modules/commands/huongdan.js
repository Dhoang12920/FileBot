module.exports.config = {
	name: "huongdan",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "Danh sách lệnh",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 60
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "╭───╮\n    %1\n╰───╯ \n📜Mô tả: %2\n\n» 🧞Credit: %7\n» 📄Hướng dẫn cách dùng: %3\n» 🌟Thuộc nhóm: %4\n» ⏱Thời gian chờ: %5 giây(s)\n» 👥Quyền hạn: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n💥💢💥 Điều Hành Bởi JRT 💥💢💥",
		"helpAll": '≻──── •👇🏻• ────≺\n[🌺] 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %1 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n[🐳] 𝑆𝑢̛̉ 𝑑𝑢̣𝑛𝑔: ◤%2menu + tên lệnh◢ đ𝑒̂̉ 𝑥𝑒𝑚 𝑐ℎ𝑖 𝑡𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔\n[🤖] 𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉𝑖 𝑁𝑔𝑢𝑦𝑒̂̃𝑛 𝐻𝑎̉𝑖 Đ𝑎̆𝑛𝑔.\n[⚜️] 𝐿𝑖𝑒̂𝑛 ℎ𝑒̣̂: https://www.facebook.com.NHD.JRT.262\n[👥] 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛: https://bio.link/nhdjrt262\n[📢] 𝑀𝑒𝑛𝑢 𝑠𝑒̃ 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑔𝑜̛̃ 𝑠𝑎𝑢 60𝑠',
		"helpList": '===[⚜️] BOT JRT [⚜️]===\n◆━━━━━━━━━◆\n%2\n◆━━━━━━━━━◆\n[💟] 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %3 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n[💥] 𝐻𝑎̃𝑦 𝑟𝑒𝑝𝑙𝑦 (𝑝ℎ𝑎̉𝑛 ℎ𝑜̂̀𝑖 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑏𝑜𝑡) 𝑆𝑇𝑇 𝑚𝑎̀ 𝑏𝑎̣𝑛 𝑚𝑢𝑜̂́𝑛 𝑐ℎ𝑜̣𝑛\n[🔰] 𝔻𝕦̀𝕟𝕘 %4menu all đ𝕖̂̉ 𝕩𝕖𝕞 𝕥𝕒̂́𝕥 𝕔𝕒̉ 𝕔𝕒́𝕔 𝕝𝕖̣̂𝕟𝕙\n[⚜️] 𝐿𝑖𝑒̂𝑛 ℎ𝑒̣̂: https://www.facebook.com.NHD.JRT.262\n[👥] 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛: https://bio.link/nhdjrt262\n[🤖] 𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉𝑖 𝑁𝑔𝑢𝑦𝑒̂̃𝑛 𝐻𝑎̉𝑖 Đ𝑎̆𝑛𝑔',
		"helpeply": '[🔰] %1 [🔰]\n𝑆𝑎𝑢 đ𝑎̂𝑦 𝑙𝑎̀ 𝑛ℎ𝑜́𝑚 𝑙𝑒̣̂𝑛ℎ 𝑐𝑢̉𝑎 𝐵𝑜𝑡\n[💥] %2 [💥]\n◆━━━━━━━━━━━◆\n%3\n[🌟] 𝐻𝑎̃𝑦 𝑟𝑒𝑝𝑙𝑦 (𝑝ℎ𝑎̉𝑛 ℎ𝑜̂̀𝑖 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑏𝑜𝑡) 𝑠𝑜̂́ 𝑡ℎ𝑢̛́ 𝑡𝑢̛̣ đ𝑒̂̉ 𝑥𝑒𝑚 𝑐ℎ𝑖 𝑡𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔!',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}


module.exports.handleReply = async function ({
  api: _0x3f76cf,
  event: _0x4655ad,
  handleReply: _0x33c75f,
  getText: _0x1e1214,
  Threads: _0x24ad68,
}) {
  if (_0x33c75f.author != _0x4655ad.senderID) {
    return
  }
  const _0x6585f1 =
    (await _0x24ad68.getData(_0x4655ad.threadID)).data.PREFIX ||
    global.config.PREFIX
  switch (_0x33c75f.type) {
    case 'reply': {
      const _0xc8065d = global.client.commands.values()
      var _0x59d821 = _0x33c75f.arraymun[_0x4655ad.body - 1],
        _0x1e3e03 = [],
        _0x184249 = '',
        _0x40c6a9 = 1,
        _0x2e4382 = [],
        _0x2cba11 = []
      for (const _0x1f5993 of _0xc8065d) {
        if (
          !_0x1e3e03.some(
            (_0x54e98a) =>
              _0x54e98a.group.toLowerCase() ==
              _0x1f5993.config.commandCategory.toLowerCase()
          )
        ) {
          _0x1e3e03.push({
            group: _0x1f5993.config.commandCategory.toLowerCase(),
            cmds: [_0x1f5993.config.name],
          })
        } else {
          _0x1e3e03
            .find(
              (_0x5c5bfa) =>
                _0x5c5bfa.group.toLowerCase() ==
                _0x1f5993.config.commandCategory.toLowerCase()
            )
            .cmds.push(_0x1f5993.config.name)
        }
      }
      for (let _0x505668 of _0x1e3e03) {
        _0x2e4382.push(_0x505668.cmds)
      }
      for (let _0x50044d of _0x2e4382[_0x59d821 - 1]) {
        _0x184249 += _0x40c6a9++ + '. ' + _0x6585f1 + _0x50044d + '\n'
        _0x2cba11.push(_0x50044d)
      }
      return (
        _0x3f76cf.unsendMessage(_0x33c75f.messageID),
        _0x3f76cf.sendMessage(
          _0x1e1214(
            'helpeply',
            global.config.BOTNAME,
            _0x33c75f.arraygroup[_0x4655ad.body - 1],
            _0x184249
          ),
          _0x4655ad.threadID,
          (_0x1b2175, _0x258ad5) => {
            global.client.handleReply.push({
              name: this.config.name,
              author: _0x4655ad.senderID,
              messageID: _0x258ad5.messageID,
              cmdarray: _0x2cba11,
              type: 'replyhelp',
            })
            global.client.handleReaction.push({
              name: this.config.name,
              messageID: _0x258ad5.messageID,
              author: _0x4655ad.senderID,
            })
            setTimeout(() => {
              _0x3f76cf.unsendMessage(_0x258ad5.messageID)
            }, 60000)
          }
        )
      )
    }
    case 'replyhelp': {
      const _0x3c16c3 = global.client.commands.get(
        _0x33c75f.cmdarray[_0x4655ad.body - 1]
      )
      return (
        _0x3f76cf.unsendMessage(_0x33c75f.messageID),
        _0x3f76cf.sendMessage(
          _0x1e1214(
            'moduleInfo',
            _0x3c16c3.config.name,
            _0x3c16c3.config.description,
            '' +
              _0x6585f1 +
              _0x3c16c3.config.name +
              ' ' +
              (_0x3c16c3.config.usages ? _0x3c16c3.config.usages : ''),
            _0x3c16c3.config.commandCategory,
            _0x3c16c3.config.cooldowns,
            _0x3c16c3.config.hasPermssion == 0
              ? _0x1e1214('user')
              : _0x3c16c3.config.hasPermssion == 1
              ? _0x1e1214('adminGroup')
              : _0x1e1214('adminBot'),
            _0x3c16c3.config.credits
          ),
          _0x4655ad.threadID,
          _0x4655ad.messageID
        )
      )
    }
  }
}
module.exports.handleEvent = async function ({
  api: _0xcdc71b,
  event: _0x367f34,
  getText: _0x31d6d7,
  Threads: _0x4c0e9b,
}) {
  const { commands: _0x3ff819 } = global.client,
    { threadID: _0x56eb32, messageID: _0x1cb6c3, body: _0x36b8de } = _0x367f34
  if (
    !_0x36b8de ||
    typeof _0x36b8de == 'undefined' ||
    _0x36b8de.indexOf('help') != 0
  ) {
    return
  }
  const _0x53c8ef = _0x36b8de
    .slice(_0x36b8de.indexOf('help'))
    .trim()
    .split(/\s+/)
  if (_0x53c8ef.length == 1 || !_0x3ff819.has(_0x53c8ef[1].toLowerCase())) {
    return
  }
  const _0xf22a78 = _0x3ff819.get(_0x53c8ef[1].toLowerCase()),
    _0x56861a =
      (await _0x4c0e9b.getData(_0x367f34.threadID)).data.PREFIX ||
      global.config.PREFIX
  return _0xcdc71b.sendMessage(
    _0x31d6d7(
      'moduleInfo',
      _0xf22a78.config.name,
      _0xf22a78.config.description,
      '' +
        _0x56861a +
        _0xf22a78.config.name +
        ' ' +
        (_0xf22a78.config.usages ? _0xf22a78.config.usages : ''),
      _0xf22a78.config.commandCategory,
      _0xf22a78.config.cooldowns,
      _0xf22a78.config.hasPermssion == 0
        ? _0x31d6d7('user')
        : _0xf22a78.config.hasPermssion == 1
        ? _0x31d6d7('adminGroup')
        : _0x31d6d7('adminBot'),
      _0xf22a78.config.credits
    ),
    _0x56eb32,
    _0x1cb6c3
  )
}
module.exports.handleReaction = async ({
  event: _0x5c52a7,
  api: _0x31f890,
  handleReaction: _0x287eed,
}) => {
  if (parseInt(_0x5c52a7.userID) !== parseInt(_0x287eed.author)) {
    return
  }
  _0x31f890.unsendMessage(_0x287eed.messageID)
}
module.exports.run = async function ({
  api: _0x47bdb8,
  event: _0x201c62,
  args: _0x290f03,
  getText: _0x1c2ad7,
  Threads: _0x520431,
}) {
  const { commands: _0x4a518b } = global.client,
    { threadID: _0x440e37, messageID: _0x51ac5e } = _0x201c62,
    _0x49e6ec = _0x4a518b.get((_0x290f03[0] || '').toLowerCase()),
    { autoUnsend: _0x5e7acb, delayUnsend: _0xb07705 } =
      global.configModule[this.config.name],
    _0x4da137 =
      (await _0x520431.getData(_0x201c62.threadID)).data.PREFIX ||
      global.config.PREFIX
  if (!_0x290f03[0]) {
    const _0x41bb19 = _0x4a518b.values()
    var _0x2ae525 = [],
      _0x9173a9 = '',
      _0x5f0379 = 1,
      _0x2c2955 = [],
      _0x198614 = []
    for (const _0xa8f35a of _0x41bb19) {
      if (
        !_0x2ae525.some(
          (_0x27695f) =>
            _0x27695f.group.toLowerCase() ==
            _0xa8f35a.config.commandCategory.toLowerCase()
        )
      ) {
        _0x2ae525.push({
          group: _0xa8f35a.config.commandCategory.toLowerCase(),
          cmds: [_0xa8f35a.config.name],
        })
      } else {
        _0x2ae525
          .find(
            (_0x5b1e9e) =>
              _0x5b1e9e.group.toLowerCase() ==
              _0xa8f35a.config.commandCategory.toLowerCase()
          )
          .cmds.push(_0xa8f35a.config.name)
      }
    }
    for (let _0x497580 of _0x2ae525) {
      _0x9173a9 +=
        _0x5f0379++ + '. \u2ABC' + _0x497580.group.toUpperCase() + '.\n'
      _0x2c2955.push(_0x5f0379 - 1)
      _0x198614.push(_0x497580.group)
    }
    return (
      console.log(_0x2c2955),
      _0x47bdb8.sendMessage(
        _0x1c2ad7(
          'helpList',
          global.config.BOTNAME,
          _0x9173a9,
          _0x4a518b.size,
          _0x4da137
        ),
        _0x201c62.threadID,
        (_0x2faa1c, _0x1a3aa0) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: _0x201c62.senderID,
            messageID: _0x1a3aa0.messageID,
            arraymun: _0x2c2955,
            arraygroup: _0x198614,
            type: 'reply',
          })
          global.client.handleReaction.push({
            name: this.config.name,
            messageID: _0x1a3aa0.messageID,
            author: _0x201c62.senderID,
          })
          setTimeout(() => {
            _0x47bdb8.unsendMessage(_0x1a3aa0.messageID)
          }, 60000)
        }
      )
    )
  }
  if (_0x290f03[0] == 'all') {
    const _0x32c15d = _0x4a518b.values()
    var _0x2ae525 = [],
      _0x3d1831 = ''
    for (const _0x4fe764 of _0x32c15d) {
      if (
        !_0x2ae525.some(
          (_0x2d6998) =>
            _0x2d6998.group.toLowerCase() ==
            _0x4fe764.config.commandCategory.toLowerCase()
        )
      ) {
        _0x2ae525.push({
          group: _0x4fe764.config.commandCategory.toLowerCase(),
          cmds: [_0x4fe764.config.name],
        })
      } else {
        _0x2ae525
          .find(
            (_0x25fd3c) =>
              _0x25fd3c.group.toLowerCase() ==
              _0x4fe764.config.commandCategory.toLowerCase()
          )
          .cmds.push(_0x4fe764.config.name)
      }
    }
    return (
      _0x2ae525.forEach(
        (_0x2d4837) =>
          (_0x3d1831 +=
            '≻──── •⁂• ────≺\n🏩🏩🏩 ' +
            (_0x2d4837.group.charAt(0).toUpperCase() +
              _0x2d4837.group.slice(1)) +
            ' 💒💒💒\n' +
            _0x2d4837.cmds.join(' ⚜️ ') +
            '\n\n')
      ),
      _0x47bdb8.sendMessage(
        _0x3d1831 + _0x1c2ad7('helpAll', _0x4a518b.size, _0x4da137),
        _0x440e37,
        async (_0x55bca4, _0x33fbd4) => {
          global.client.handleReaction.push({
            name: this.config.name,
            messageID: _0x33fbd4.messageID,
            author: _0x201c62.senderID,
          })
          if (_0x5e7acb) {
            return (
              await new Promise((_0x13a078) =>
                setTimeout(_0x13a078, _0xb07705 * 1000)
              ),
              _0x47bdb8.unsendMessage(_0x33fbd4.messageID)
            )
          } else {
            return
          }
        }
      )
    )
  }
  return _0x47bdb8.sendMessage(
    _0x1c2ad7(
      'moduleInfo',
      _0x49e6ec.config.name,
      _0x49e6ec.config.description,
      '' +
        _0x4da137 +
        _0x49e6ec.config.name +
        ' ' +
        (_0x49e6ec.config.usages ? _0x49e6ec.config.usages : ''),
      _0x49e6ec.config.commandCategory,
      _0x49e6ec.config.cooldowns,
      _0x49e6ec.config.hasPermssion == 0
        ? _0x1c2ad7('user')
        : _0x49e6ec.config.hasPermssion == 1
        ? _0x1c2ad7('adminGroup')
        : _0x1c2ad7('adminBot'),
      _0x49e6ec.config.credits
    ),
    _0x440e37,
    _0x51ac5e
  )
}
