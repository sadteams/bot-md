const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
let handler = async(m, { conn, usedPrefix, command, args, text, }) => {
    if(!text) throw `Example : *${usedPrefix + command} 😳*`
    let ras = `Halo Kak @${m.sender.split('@')[0]}`
    let sel = `Emojinya Kan Ada Beberapa Jenis Tuh, Kakak Mau Emoji Jenis Apa? Pilih Dibawah Ya Kak!\nHarap Perhatikan Cuma Bisa 1 Emoji Dan Gunakan Emoji!`
    let rs = `Pilih Disini`
const sections = [ {
	title: `Silahkan Pilih List Type Emoji Dibawah!`,
	rows: [
	{title: `Emoji ${args[0]} Apple`, rowId: `#emoji apple ${args[0]}`, description: ``},
        {title: `Emoji ${args[0]} Facebook`, rowId: `#emoji facebook ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Google`, rowId: `#emoji google ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Htc`, rowId: `#emoji htc ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Instagram`, rowId: `#emoji instagram ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Microsoft`, rowId: `#emoji microsoft ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Mozilla`, rowId: `#emoji mozilla ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Openmoji`, rowId: `#emoji openmoji ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Pixel`, rowId: `#emoji pixel ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Samsung`, rowId: `#emoji samsung ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} Twitter`, rowId: `#emoji twitter ${args[0]}`, description: ``},
	{title: `Emoji ${args[0]} WhatsApp`, rowId: `#emoji whatsapp ${args[0]}`, description: ``},
               ]
    } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

    if(!args[1]) await conn.sendMessage(m.chat, listMessage, { quoted: m })

    let er = `contoh:
*${usedPrefix}emo(spasi)ap(spasi)❤️*
*${usedPrefix}emo ap ❤️*
${data.sa}${data.kki} ${data.zt}Opsi${data.zt} ${data.kka}
${data.gy} ap = apple
${data.gy} fa = facebook
${data.gy} go = google
${data.gy} ht = htc
${data.gy} ig = instagram 
${data.gy} mi = microsoft
${data.gy} mo = mozilla
${data.gy} op = openmoji
${data.gy} pi = pixel
${data.gy} sa = samsung
${data.gy} tw = twitter
${data.gy} wh = whatsapp
${data.sb}
Hanya bisa 1 emoji, perhatikan spasi, jangan spam!
`
  if(!args[0]) throw er
  //if (!args[1]) throw er
  let template = (args[0] || '').toLowerCase()
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[0].url, m, { packname: packname, author: author })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[6].url, m, { packname: packname, author: author })
            })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[1].url, m, { packname: packname, author: author })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[12].url, m, { packname: packname, author: author })
            })
          break
        case 'Ig':
        case 'instagram':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[11].url, m, { packname: packname, author: author })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[3].url, m, { packname: packname, author: author })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[13].url, m, { packname: packname, author: author })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[8].url, m, { packname: packname, author: author })
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[7].url, m, { packname: packname, author: author })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[2].url, m, { packname: packname, author: author })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[5].url, m, { packname: packname, author: author })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendStimg(m.chat, emoji.images[4].url, m, { packname: packname, author: author })
            })
          break
      }
    } catch (e) {
      throw er
    }
  }
}
handler.help = ['semoji'].map(v => v + ' <emoji>')
handler.tags = ['sticker']
handler.command = /^((s(tic?ker)?)?emo(ji)?)$/i

module.exports = handler