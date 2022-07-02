let xfar = require('xfarr-api')
let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, conn:fur, args }) => {
if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
xfar.Drakor(args[0]).then(async data => {
let txt = `*--------「 Drakor-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*📈 Tahun :* ${i.years}\n`
txt += `*🍀 Genre :* ${i.genre}\n`
txt += `*📷 Thumbnail :* ${i.thumbnail}\n`
txt += `*🔗 Url :* ${await shortlink(i.url)}\n-----------------------------------------------------\n`
}

conn.sendButtonImg(m.chat, await (await fetch(data[0].thumbnail)).buffer(), txt, wm, 'pencet', 'ok', m)
})
}
handler.help = ['drakor <keyword>']
handler.tags = ['internet']
handler.command = /^(drakor)$/i

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}
