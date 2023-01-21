import { writeFileSync } from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `plugins/${text}.js`
    await writeFileSync(path, m.quoted.text)

    m.reply(`Saved ${path} to file!`)
}

handler.help = ['savefileplugins', 'sfp'].map(v => v + ' <path>')
handler.tags = ['owner']
handler.command = ['savefileplugins', 'sfp']

handler.owner = true
export default handler
