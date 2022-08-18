let handler = async (m, { conn, args, groupMetadata }) => {
      let target = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
      let warn = db.data.users[target].warn
      m.reply(`Kamu memiliki Total Warning : ${warn}`)
}

handler.help = ['Cekwarn @user']
handler.tags = ['group']
handler.command = /^cekwarn$/i
handler.group = true
handler.botAdmin = true

module.exports = handler
