let handler = async (m, { conn, usedPrefix, command }) => {
  try {
  conn.sendButtonImg(m.chat, gb, 'Nihh Animenya', wm, `Next`, `${usedPrefix}${command}` , m)
  } catch {
    throw data.eror 
  }
}
handler.help = ['randomanime']
handler.tags = ['anime']
handler.command = /^(randomanime|animerandom)$/i

handler.limit = true

module.exports = handler