let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'teksnya mana?'
let sel = (`https://api.lolhuman.xyz/api/ttp6?apikey=SGWN&text=${teks}`)
 conn.sendFile(m.chat, sel, 'ttp.webp', 0, m, {packname: packname, author: author, mentions: [m.semder]})
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

module.exports = handler
