let { webp2mp4 } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `Balas stiker dengan perintah *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `Balas stiker dengan perintah *${usedPrefix + command}*`
  if (/to(mp4|vid(eo)?)$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { caption: `• Sticker ${command} by ` + wm})
    }
  if (/togif$/i.test(command)) {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media)
  }
  conn.sendMedia(m.chat, out, m, { gifPlayback: true, caption: `• Sticker ${command} by ` + wm, contextInfo: { externalAdReply :{
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
  }
}
handler.help = ['tomp4', 'togif'].map(v=> v + " <reply>")
handler.tags = ['tools']
handler.command = /^to(mp4|gif|vid(eo)?)$/i

module.exports = handler