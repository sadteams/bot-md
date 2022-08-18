let { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw 'Contoh penggunaan:\n\n*.emojimix 🐷+😣*'
   	let [emoji1, emoji2] = text.split`+`
		let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
                 for (let res of anu.results) {
		let stek = await sticker(false, res.url, global.packname, global.author)
  conn.sendFile(m.chat, stek, '', '', m)
		}
}
handler.tags = ['maker']
handler.help = ['emojimix <emoji1> + <emoji2>']
handler.command = /^((emoji|se)mix)$/i
module.exports = handler





// (`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)