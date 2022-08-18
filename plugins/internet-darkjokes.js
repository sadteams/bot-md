let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lol', '/api/meme/darkjoke', {}, 'apikey'), 'Dark Jokes', wm, 'Next!', '.darkjokes', m, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm, 
    thumbnail: bg,
    sourceUrl: data.sc
     }}
  })
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler