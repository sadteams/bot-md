let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  let json = await res.json()
  conn.sendButtonImg(m.chat, json.url, 'Nihh nekonya', wm, `Next`, `${usedPrefix}${command}` , m)
  } catch {
    throw data.eror 
  }
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

handler.limit = true

module.exports = handler