let toM = a => '@' + a.split('@')[0]
function handler(m, { conn, groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b 
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    conn.sendButton(m.chat, `${toM(a)} ❤️ ${toM(b)}`, wm, 'Jadian', '.jadian', m, {
        mentions: [a, b]})
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = ['jadian']
handler.group = true

module.exports = handler