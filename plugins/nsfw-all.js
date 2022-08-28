let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let { age } = db.data.users[m.sender]
if (!db.data.settings[conn.user.jid].nsfw) throw `Fitur ini tidak aktif`
if (age <17) throw conn.reply(m.chat, 'Lu masih di bawah umur jangan dulu deh', m) 
if (command == 'ahegao') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/ahegao.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'ass') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/ass.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'bdsm') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/bdsm.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'blowjob') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/blowjob.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'cuckold') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/cuckold.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'cum') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/cum.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'eba') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/eba.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'ero') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/ero.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'femdom') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/femdom.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'foot') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/foot.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'gangbang') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/gangbang.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'gifs') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/gifs.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'glasses') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/glasses.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'hentai') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/hentai.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'hentaivid') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/hentaivid.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonVid(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'jahy') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/jahy.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'manga') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/manga.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'masturbation') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/masturbation.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'neko') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/neko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'neko2') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/neko2.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'neko3') {
let res = await fetch('http://nekos.life/api/v2/img/neko')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
await conn.sendButtonImg(m.chat, json.url, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(json.url)).buffer()})
} 
if (command == 'waifu') {
let res = await fetch('https://api.waifu.pics/nsfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
await conn.sendButtonImg(m.chat, json.url, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(json.url)).buffer()})
}
if (command == 'nsfwloli') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/nsfwloli.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'orgy') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/orgy.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'panties') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/panties.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'pussy') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/pussy.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'tentacles') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/tentacles.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'thighs') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/thighs.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'yuri') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/yuri.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
if (command == 'zettai') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/zettai.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
}
handler.command = handler.help = [
'ahegao',
'ass',
'bdsm',
'blowjob',
'cuckold',
'cum',
'eba',
'ero',
'femdom',
'foot',
'gangbang',
'gifs',
'glasses',
'hentai',
'hentaivid',
'jahy',
'manga',
'masturbation',
'neko',
'neko2',
'neko3',
'waifu',
'nsfwloli',
'orgy',
'panties',
'pussy',
'tentacles',
'thighs',
'yuri',
'zettai'
]
handler.tags = ['nsfw']
module.exports = handler
