let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`) await conn.sendMessage(res.gid, `Halo,\n *${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, Saya baru saja bergabung di grup ini diundang oleh @${m.sender.split`@`[0]}
    
ketik *#menu* untuk melihat daftar perintah`, MessageType.text, { contextInfo: { mentionedJid: [m.sender], externalAdReply :{
       mediaUrl: ' https://github.com/Kangsad01/bot-md',
       mediaType: 4,
       title: '𝚃𝚑𝚎.𝚂𝚊𝚍.𝙱𝚘𝚢𝟶𝟷 ×͜×',
       body: 'Whatsapp Developer Bot',
       thumbnailUrl: 'https://telegra.ph/file/b65957f39a82395bb09d0.jpg',
sourceUrl: 'https://wa.me/62895336282144?text=Assalamualaikum'
}}})
}
handler.help = ['joinp <linkgrup>']
handler.tags = ['owner']
handler.command = /^joinp$/i

handler.rowner = true

module.exports = handler