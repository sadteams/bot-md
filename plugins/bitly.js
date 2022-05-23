let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
let res = await fetch(API('xteam', '/shorturl/bitly', { url: args[0] }, 'apikey'))
    let json = await res.json()
    
    m.reply(wait)
await conn.reply(m.chat, json.result.link, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: linkig,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm, 
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgc
     }}
  })
}
handler.help = ['bitly'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^bitly$/i

handler.premium = false

module.exports = handler