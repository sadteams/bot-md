let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} naruto`
xfar.Pinterest(args[0]).then(async data => {
let pincpt = `*Hasil Pencarian⁩:* ${args}\n\n *🚀Link:* ${data.url}`
conn.sendButtonImg(m.chat,data.url, pincpt, wm, `Next`, `.pinterest ${args}`, m)})
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pin(terest)?)$/i

module.exports = handler