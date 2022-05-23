let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Ownerku Ada yang memanggil anda ehe ehe:V*`, m)

  conn.reply(m.chat, `
Ngapain lu manggil owner ku dek?
kalau mau sewa chat pribadi aja
Gak usah Malu-malu
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@62895336282144 |@62895336282144/i
handler.command = new RegExp

module.exports = handler