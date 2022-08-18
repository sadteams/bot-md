const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let handler = m => m

handler.before = async function (m) {
    let chat = db.data.chats[m.chat]
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
    if (!chat.viewonce || chat.isBanned) return
    if (m.mtype == 'viewOnceMessage') {
        let msg = m.message.viewOnceMessage.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return this.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m, { contextInfo: { externalAdReply :{
        showAdAttribution: true,
        mediaUrl: data.sc,
        mediaType: 2,
        description: data.deslink, 
        title: run,
        body: wm,
        thumbnail: bg,
        sourceUrl: data.sc
        }}
       })
        } else if (/image/.test(type)) {
            return this.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m, { contextInfo: { externalAdReply :{
        showAdAttribution: true,
        mediaUrl: data.sc,
        mediaType: 2,
        description: data.deslink, 
        title: run,
        body: wm,
        thumbnail: bg,
        sourceUrl: data.sc
        }}
       })
        }
    }
}

module.exports = handler