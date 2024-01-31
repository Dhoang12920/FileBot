const endpoint = 'https://api.phamvandien.xyz'
const axios = require('axios')
const APIKEY =  "DismeVIP_2484037842"
module.exports.config = {
  name: "altp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Game trả lời câu hỏi 'Ai là triệu phú' - D-Jukie",
  commandCategory: "Giải trí",
  usages: "[]",
  cooldowns: 0
}

module.exports.languages = {
  "vi": {
      "APIKEY": 'API KEY không chính xác hoặc đã hết hạn dùng thử!',
      "registerFail": '👤 Người chơi đã có tài khoản trên máy chủ!',
      "registerSuccess": '👤 Đăng ký tài khoản trên máy chủ "Ai là triệu phú" thành công <3',
      "notFoundInfo": '🚫 Không tìm thấy thông tin của ban, vui lòng đăng ký!\n⏩ Lệnh: "%1 -r"',
      "showInfo": '[===== Disme Project =====]\n👤 Tên: %1\n⚡️Số điểm hiện có: %2\n⚡️Câu hỏi cao nhất từng trả lời: %3',
      "ranking": '🏆Xếp hạng người chơi trên toàn máy chủ🏆\n',
      "errorPlay": '🚫 Mỗi nhóm chỉ được phép có một người chơi cùng lúc!!',
      "typeQuestion": '📝 Bạn vui lòng chọn dạng câu hỏi muốn hiển thị:\n1. Văn bản\n2. Hình ảnh\n⏩ Thực hiện reply tin nhắn này [Number]',
      "default": `[ Disme Project ] • Ai là triệu phú - Game trả lời câu hỏi!\n\n• Đăng ký: ${this.config.name} register\n• Xếp hạng: ${this.config.name} rank\n• Thông tin người chơi: ${this.config.name} info\n• Bắt đầu chơi:  ${this.config.name} play\n\n💸 Hãy là người đầu tiên trả lời hết 15 câu hỏi của chương trình <3`,
      "stop": `• Bạn đã quyết định dừng cuộc chơi tại mốc câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2$`,
      "help": '📖 Lưu ý: \n• Hãy nhắn \n"stop" để ngừng cuộc chơi\n"help 1" để loại bỏ 2 đáp án sai.(1)\n"help 2" để tạo vote trong group.(unlimited)\n"help 3" để đổi câu hỏi(1)',
      "true": '🥳 Xin chúc mừng, bạn đã trả lời đúng!',
      "true15": '🥳Xin chúc mừng, bạn là người đầu tiên trả lời đúng 15 câu hỏi của chương trình.\n• Số tiền bạn nhận được từ chương trình là: %1$',
      "timeout": `• Hết thời gian, bạn đã không đưa ra được phương án chính xác của chương trình.\n• Bạn dừng cuộc chơi tại câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2$`,
      "false": `• Thật đáng tiếc, đó không phải phương án chính xác của chương trình.\n• Bạn dừng cuộc chơi tại câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2$`,
      "notFoundQuestion": "❎ Câu hỏi này không tồn tại!!"
  },
  "en": {}
}

module.exports.onLoad = function() {
    global.timer = new Object()
    global.quiz = new Object()
}

const download = async (url) => {
  const response = await axios.get(url, {
      responseType: 'stream'
  })
  return response.data
}

const reply = (type, info, event, option) => {
  try {
      var obj = { type: type, name: this.config.name, messageID: info.messageID, author: event.senderID }
      if (option) { obj[option.key] = option.value }
      global.quiz[event.threadID].messageID = info.messageID
  }
  catch(e) {}
  return obj
}

const correct = (id) => {
    clearTimeout(global.timer[id])
    delete global.timer[id]
}
const start = (id, time, api, getText, idPlayer) => {
    global.timer[id] = setTimeout(function () {
        if (!global.quiz[id]) return
        axios.get(`${endpoint}/game/quiz?type=stop&id=${idPlayer}&apikey=${APIKEY}`)
        api.sendMessage(getText("timeout", global.quiz[id].numberQuiz, global.quiz[id].coins), id)
        delete global.quiz[id]
        return
    }, time * 1000)
}

const help = (id, time, api, getText, idPlayer) => {
    correct(id)
    start(id, time, api, getText, idPlayer)
}

async function getQuestion(type, level, id, threadID, api, getText, help) {
  type = String(type)
  level = String(level)
  try {
      if (help == 3) {
          var resp = (await axios.get(`${endpoint}/game/quiz?type=change&id=${id}&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&apikey=${APIKEY}`)).data
      }
      if (help == 1) {
          var resp = (await axios.get(`${endpoint}/game/quiz?type=5050&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&id=${global.quiz[threadID].idPlayer}&apikey=${APIKEY}`)).data
          resp.time = 30
      }
      if (!help) {
          var resp = (await axios.get(`${endpoint}/game/quiz?type=altp&level=${level}&id=${id}&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&apikey=${APIKEY}`)).data
      }
  } catch (e) {
      if(global.tryGet == 1) return
      global.tryGet = 1
      await getQuestion(type, level, id, threadID, api, getText, help)
  }
  switch (type) {
  case '1': {
      if (resp.status == false) { return 3 }
      var ans = resp.dataGame.dapan.map(i => {
          if (i == null) { i = "" }
          return i
      })
      var msg = `❓ Câu hỏi thứ ${resp.dataGame.level} (${resp.time ? resp.time : 60}s) - ${resp.dataGame.coins}$\n${resp.dataGame.question}\nA: ${ans[0]}\nB: ${ans[1]}\nC: ${ans[2]}\nD: ${ans[3]}`
      global.quiz[threadID].help_2 = resp.dataGame
      start(threadID, 60, api, getText, id)
      return { msg, time: resp.dataGame.time, coins: resp.dataGame.coins }
  }
  case '2': {
      if (resp.status == false) { return 3 }
      var msg = { body: `❓ Câu hỏi thứ ${resp.dataGame.level} (${resp.time ? resp.time : 60}s) - ${resp.dataGame.coins}$`, attachment: await download(resp.dataGame.url) }
      global.quiz[threadID].help_2 = resp.dataGame
      start(threadID, 65, api, getText, id)
      return { msg, time: resp.dataGame.time, coins: resp.dataGame.coins }
  }
  default: return
  }
}

module.exports.handleEvent = async ({ event, api, Users, Currencies, getText }) => {
  const { threadID, messageID, senderID, body } = event
  if (!global.quiz || !global.quiz[threadID] || global.quiz[threadID].idPlayer != senderID) return
  switch (body) {
  case 'stop': {
      api.unsendMessage(global.quiz[threadID].messageID)
      await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
      var resp = (await axios.get(`${endpoint}/game/quiz?type=stop&id=${senderID}&apikey=${APIKEY}`)).data
      api.sendMessage(getText("stop", global.quiz[threadID].numberQuiz, global.quiz[threadID].coins), threadID, messageID)
      delete global.quiz[threadID]
      return
  }
  case 'help 1': {
      var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText, 1)
      if (question == 3) return api.sendMessage('• Bạn đã hết lượt loại bỏ 2 đáp án sai!', threadID)
      api.unsendMessage(global.quiz[threadID].messageID)
      help(threadID, 30000, api, getText, senderID)
      api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
      break
  }
  case 'help 2': {
      var dataGame = global.quiz[threadID].help_2
      api.createPoll(dataGame.question, threadID, {
          [dataGame.dapan[0]]: false,
          [dataGame.dapan[1]]: false,
          [dataGame.dapan[2]]: false,
          [dataGame.dapan[3]]: false
      }, (err) => { if (err) return console.log(err)
      })
      break
  }
  case 'help 3': {
      var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api,getText, 3)
      if (question == 3) return api.sendMessage('• Bạn đã hết lượt đổi câu hỏi!', threadID)
      api.unsendMessage(global.quiz[threadID].messageID)
      help(threadID, 60000, api, getText, senderID)
      api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
      break
  }
  default: return
  }
}
module.exports.handleReply = async function ({ api, event, handleReply, Currencies, getText }) {
  const { threadID, messageID, senderID, body } = event
  if (handleReply.author != senderID) return
  switch (handleReply.type) {
  case 'choose': {
      global.quiz[threadID] = {}
      global.quiz[threadID].numberQuiz = 1
      global.quiz[threadID].idPlayer = senderID
      global.quiz[threadID].coins = 0
      if (body == 1) {
          api.sendMessage(getText("help"), threadID, messageID)
          await new Promise(resolve => setTimeout(resolve, 200))
          global.quiz[threadID].typeQuiz = 1
      } else if (body == 2) {
          api.sendMessage(getText("help"), threadID, messageID)
          await new Promise(resolve => setTimeout(resolve, 200))
          global.quiz[threadID].typeQuiz = 2
      } else return
  }
  case 'start': {
      api.unsendMessage(handleReply.messageID)
      var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText)
      return api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
  }
  case 'ans': {
    if(!global.quiz[threadID]) return
      var list = [' ', 'a', 'b', 'c', 'd']
      var check = await checkAns(body.toLowerCase(), senderID, handleReply.time)
      if (list.includes(body.toLowerCase()) && check == true) {
          correct(threadID)
          api.unsendMessage(handleReply.messageID)
          global.quiz[threadID][global.quiz[threadID].numberQuiz] = true
          global.quiz[threadID].numberQuiz = global.quiz[threadID].numberQuiz + 1
          api.sendMessage(getText('true'), threadID, messageID)
          await new Promise(resolve => setTimeout(resolve, 200))
          if (global.quiz[threadID].numberQuiz > 15) {
              await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
              api.sendMessage(getText('true15', global.quiz[threadID].coins), threadID)
              delete global.quiz[threadID]
              return
          }
          var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText)
          global.quiz[threadID].coins = question.coins
          return api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time })))
      }
      if (list.includes(body.toLowerCase()) && check == false) {
          correct(threadID)
          api.unsendMessage(handleReply.messageID)
          await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
          api.sendMessage(getText("false", global.quiz[threadID].numberQuiz, global.quiz[threadID].coins), threadID, messageID)
          delete global.quiz[threadID]
          return
      }
      if (list.includes(body.toLowerCase()) && check == 404 || check == 503) {
          return api.sendMessage(getText("notFoundQuestion"), threadID, messageID)
      }
  }
  default: return
  }
  async function checkAns(ans, id, time) {
      var resp = (await axios.get(`${endpoint}/game/quiz?type=check&dapan=${ans}&id=${id}&time=${time}&apikey=${APIKEY}`)).data
      return resp.status
  }
}
module.exports.run = async function ({ api, event, args, Users, getText }) {
  const { threadID, messageID, senderID } = event
  const type = args[0]
  const name = (await Users.getData(senderID)).name
  const checkKey = (await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)).data
  if(checkKey.error && checkKey.error == 1) {
      return api.sendMessage(getText("APIKEY"), threadID, messageID)
  }
  switch (type) {
  case 'register':
  case '-r': {
      var resp = await axios.get(`${endpoint}/game/quiz?type=register&name=${encodeURI(name)}&id=${senderID}&apikey=${APIKEY}`)
      if (resp.data.error) return api.sendMessage(getText("registerFail"), threadID, messageID)
      return api.sendMessage(getText("registerSuccess"), threadID, messageID)
  }
  case 'info':
  case '-i': {
      var resp = await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)
      if (resp.data.error) return api.sendMessage(getText("notFoundInfo", this.config.name), threadID, messageID)
      return api.sendMessage(getText("showInfo", resp.data.name, resp.data.point, resp.data.highest_Level), threadID, messageID)
  }
  case 'rank':
  case '-t': {
      var resp = (await axios.get(`${endpoint}/game/quiz?type=rank&apikey=${APIKEY}`)).data
      var result = getText("ranking")
      for (let i = 0; i <= 4; i++) {
          if (!resp.data[i]) continue
          result += `• TOP ${i+1}. ${resp.data[i].name} - ${resp.data[i].point}\n`
      }
      return api.sendMessage({ body: result, attachment: await download(resp.url)}, threadID, messageID)
  }
  case 'play':
  case '-p': {
      if (global.quiz[threadID]) return api.sendMessage(getText("errorPlay"), threadID, messageID)
      var resp = await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)
      if (resp.data.error) return api.sendMessage(getText("notFoundInfo", this.config.name), threadID, messageID)
      return api.sendMessage(getText("typeQuestion"), threadID, (error, info) => global.client.handleReply.push(reply('choose', info, event)), messageID)
  }
  default: return api.sendMessage({ body: getText("default"), attachment: await download("https://i.imgur.com/T1gYRR0.png")}, threadID, messageID)
  }
}