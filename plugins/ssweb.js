let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let ss = await(await fetch(`https://shot.screenshotapi.net/screenshot?url=${args[0]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)).buffer()
  if(!args[0]) throw `Linknya mana?`  
conn.send3TemplateButtonImg(m.chat, ss, `*「 Screenshot Web 」*\n\n*💻 Url:* ${args[0]}`, wm, 'Menu', '.menu', 'Owner', '.owner', 'Link Group', '.gcbot', m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i
module.exports = handler