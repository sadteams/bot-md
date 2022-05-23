let fetch = require('node-fetch')
  let axios = require('axios')
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let ss = await(await fetch(`https://hardianto.xyz/api/tools/ssweb?url=${args[0]}&apikey=hardianto`)).buffer()
  if(!args[0]) throw `Linknya mana?`  
conn.send3TemplateButtonImg(m.chat, ss, `*「 Screenshot Web 」*\n\n*💻 Url:* ${args[0]}`, wm, 'Menu', '.menu', 'Owner', '.owner', 'Donasi', '.donasi', m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i
module.exports = handler