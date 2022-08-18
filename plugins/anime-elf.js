let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elf', {}, 'apikey'), 'Nih', wm, 'NEXT', '.elf', m, {
        contextInfo: { externalAdReply :{
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
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

module.exports = handler