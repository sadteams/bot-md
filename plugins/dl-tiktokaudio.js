const { Tiktok } = require('xfarr-api')
const { tiktok } = require('../lib/scrape')
const { toAudio, toPTT } = require('../lib/converter')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `url salah`
  const sentMsg = await m.reply(data.wait)
await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  })
  try {
    var anu = await Tiktok(args[0])
    var { url, title, thumbnail, duration, source, medias } = anu
    var { quality, extension, size, formattedSize, } = anu.medias[0]
    await conn.sendMedia(m.chat, medias[2].url, m, {mentions: [m.sender]})
    //await conn.sendMedia(m.chat, medias[2].url, null, {ptt: true, mentions: [m.sender]})
    } catch {
    try {
    var anu = await Tiktok(args[0])
    var { url, title, thumbnail, duration, source, medias } = anu
    var { quality, extension, size, formattedSize, } = anu.medias[0]
    let v = medias[1].url
    let a = await(await fetch(v)).buffer()
    let au = await toAudio(a, 'mp4')
    let vn = await toPTT(a, 'mp4') 
    await conn.sendFile(m.chat, au.data, 'tiktok.mp3', '', m, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: db.data.chats[m.chat].useDocument })
    //await conn.sendFile(m.chat, vn.data, 'tiktok.opus', '', 0, m, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: db.data.chats[m.chat].useDocument })
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm, wm, audio } = anuu
    let v = nowm
    let a = await(await fetch(v)).buffer()
    let au = await toAudio(a, 'mp4')
    let vn = await toPTT(a, 'mp4')
    await conn.sendFile(m.chat, au.data, 'tiktok.mp3', '', m, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: db.data.chats[m.chat].useDocument })
  } catch {
    throw data.eror 
      }
    }
  }
}
handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

module.exports = handler