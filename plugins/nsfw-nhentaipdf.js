/*let { get } = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...kode nya mana?'
  m.reply('Searching....')
  let lol = global.API('lol', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
  let { result } = (await get(lol)).data
  if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendMessage(m.chat, await getBuffer(result), 'documentMessage', { quoted: m, filename: `${args[0]}.pdf`, mimetype: 'application/pdf' })
}
handler.help = ['nhpdf'].map(v => v + ' <code>')
handler.tags = ['dewasa']
handler.command = /^(nhpdf)$/i
handler.limit = 1
handler.nsfw = true
module.exports = handler

async function getBuffer(url) {
k = await require('node-fetch')(url)
a = await k.buffer()
return a 
}*/




let fetch = require('node-fetch')
let { extractImageThumb } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_In progress, please wait..._')
	let res = await fetch('https://mxmxk.herokuapp.com/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let v = await fetch('https://mxmxk.herokuapp.com/nhentai/' + code)
	let json2 = await v.json()
	let buffer = await (await fetch(json.result.images.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: json2.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = handler.alias = ['nhpdf']
handler.tags = ['nsfw']
handler.command = /^(nhpdf)$/i
handler.limit = true
handler.nsfw = true
module.exports = handler
