const { tmpdir } = require('os')
const { join } = require('path')
const {readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch} = require('fs')
let handler = async (m, { args, text, usedPrefix, command }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} info`
    if (!ar1.includes(args[0])) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
let filename = join(__dirname, '../plugins/', `${args[0]}.js`)
await unlinkSync(filename)
conn.reply(m.chat, `Succes deleted "plugins/${args[0]}.js"`, m)
    
}
handler.help = ['delf']
handler.tags = ['owner']
handler.command = /^(delf)$/i

handler.mods = true

module.exports = handler