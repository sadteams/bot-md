let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'teksnya mana?'
/*let sel = global.API('xteam', '/attp', { file: '', text: teks })*/
let sel = (`https://api.lolhuman.xyz/api/attp2?apikey=SGWN&text=${text}`)
 conn.sendFile(m.chat, sel, 'attp.webp', 0, m, {packname: packname, author: author, mentions: [m.semder]})
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler