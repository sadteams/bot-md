const fs = require('fs')
let handler = async (m, { conn, isROwner }) => {
 if (!isROwner) throw false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
var media = await q.download()
            let gc = m.chat
            var { img } = await conn.generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: gc,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)
}
handler.help = ['setppgc']
handler.tags = ['group']
handler.command = /^(setppgc)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
module.exports = handler