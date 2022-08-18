let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw 'Uhm... url nya mana ?'
let res = await fetch(API('xteam', '/dl/mediafire', { url: args[0] }, 'apikey'))
    let json = await res.json()
    
    m.reply(data.wait)
await conn.reply(m.chat, `Downloading media from MediaFire`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  }) 
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}
📂 *Size*: ${json.result.size}

`.trim()
m.reply(txt)
   // await conn.sendFile(m.chat, json.result.url, `${json.result.title}`, m , null )
await conn.sendMessage(m.chat, { document: { url: json.result.url}, mimetype: 'document', fileName: `${json.result.title}`}, {quoted: m})

}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)?$/i



module.exports = handler