let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let chat = db.data.chats[m.chat]
    if (!chat.nsfw || chat.isBanned) throw `Fitur NSFW Tidak Aktif`
    if (!text) throw 'Kode Nuklirnya Bang ?'
    let ras = `Halo Kak @${m.sender.split('@')[0]}`
    let res = await fetch(API('lol', '/api/nhentaisearch', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Kode:* ${v.id}\n*Title english:* ${v.title_english}\n*Title Japanese:* ${v.title_japanese}\n*Title:* ${v.title_native}\n*Date:* ${v.date_upload}\n*Page:* ${v.page}\n*Favourite:* ${v.favourite}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.command = /^(nhs|nhsearch)$/i

module.exports = handler