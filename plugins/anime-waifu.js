let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  let json = await res.json()
  conn.sendButtonImg(m.chat, json.url, 'Nihh waifunya', wm, `Next`, `${usedPrefix}${command}` , m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink, 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  })
  } catch {
    throw data.eror 
  }
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler