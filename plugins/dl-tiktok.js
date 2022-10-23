/*let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 // let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`
    m.reply(data.wait)
await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  })
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[0]}` , txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((tt|tiktok)?(dl)?)$/i

module.exports = handler*/

/*Thank To
Xfarr (https://github.com/xfar05)
Nevt (gw) (https://github.com/NevtBotz)
Mau req fitur ?
Chat wa.me/6281805450249
Atau Di issue
Sebisa mungkin Saiya buatkan fitur nya
*/

const x = require('xfarr-api')
const bocil = require('@bochilteam/scraper')
const fetch = require('node-fetch')
const { toAudio, toPTT } = require('../lib/converter')
let handler = async (m, { conn, command, args, text }) => {
if (command == 'tiktok') {
if (!args[0]) throw 'Used Example tiktok https://vt.tiktok.com/ZSRGkNj6E/'
let a = await x.downloader.tiktok(args[0])
let { title, thumbnail } = await a
let c = await thumbnail.replace('https:','')
conn.send3ButtonDoc(m.chat, title, 'Silahkan pencet button di bawah ini untuk download tiktok', 'Watermak', `.tiktokwm ${text}`, 'No Watermak', `.tiktoknowm ${text}`, 'Audio', `.tiktokaudio ${text}`, m, {
  contextInfo: {
    externalAdReply :{
    mediaUrl: linkig,
    mediaType: 1,
    description: deslink, 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(c)).buffer(),
    renderLargerThumbnail: true,
    sourceUrl: linkgc
                             }}
                           })
}
if (command == 'tiktokwm') {
if (!args[0]) throw 'Used Example tiktokwm https://vt.tiktok.com/ZSRGkNj6E/'
let a = await x.downloader.tiktok(args[0])
let { title, media } = await a
let { quality, extension, size, formattedSize } = await media[0]
let buf = await (await fetch(media[0].url)).buffer()
let tek = `*Title:* ${title}\n*Quality:* ${quality}\n*Extension:* ${extension}\n*Size:* ${size}\n*FormattedSize:* ${formattedSize}`
await conn.sendFile(m.chat, buf, null, tek, m)
}
if (command == 'tiktoknowm') {
if (!args[0]) throw 'Used Example tiktoknowm https://vt.tiktok.com/ZSRGkNj6E/'
try {
var a = await x.downloader.tiktok(args[0])
var { title, media } = await a
var { quality, extension, size, formattedSize } = await media[1]
var buf = await (await fetch(media[1].url)).buffer()
var tek = `*Title:* ${title}\n*Quality:* ${quality}\n*Extension:* ${extension}\n*Size:* ${size}\n*FormattedSize:* ${formattedSize}`
await conn.sendFile(m.chat, buf, null, tek, m)
 } catch {
try { 
var l = await bocil.tiktokdl(args[0])
var { author: { nickname }, video, description } = await l
var url = video.no_watermark || video.no_watermark2
await conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), m)
 } catch {
 try { 
var l = await bocil.tiktokdlv2(args[0])
var { author: { nickname }, video, description } = await l
var url = video.no_watermark || video.no_watermark2
await conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Nickname:* ${nickname}
`.trim(), m)
 } catch {
      }
    } 
 }}
if (command == 'tiktokaudio') {
if (!args[0]) throw 'Used Example tiktokaudio https://vt.tiktok.com/ZSRGkNj6E/'
try {
    var { author: { nickname }, video, description } = await bocil.tiktokdl(args[0])
    var url = video.no_watermark || video.no_watermark2
    var a = await(await fetch(url)).buffer()
    var au = await toAudio(a, 'mp4')
    var vn = await toPTT(a, 'mp4')
    await conn.sendFile(m.chat, au.data, 'tiktok.mp3', m, false, { mimetype: 'audio/mp4' })
  } catch {
try {
var a = await x.downloader.tiktok('https://vt.tiktok.com/ZSRGkNj6E/')
var { title, thumbnail, media } = a
var b = await media[2].url
conn.sendFile(m.chat, b, 'error.mp3', '', m, false, { mimetype: 'audio/mp4' })
} catch {
  }
 }
}}
handler.command = [
'tiktok',
'tiktokwm',
'tiktoknowm',
'tiktokaudio'
]
handler.help = [
'tiktok <link>',
'tiktokwm <link>',
'tiktoknowm <link>',
'tiktokaudio <link>'
]
handler.tags = ['downloader']
handler.limit = true
module.exports = handler
