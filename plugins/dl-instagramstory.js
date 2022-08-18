const { igstory, igstory2 } = require('../lib/scrape')
const { instagramStory, instagramStoryv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `uhm.. username nya mana?\n\ncontoh:\n\n${usedPrefix + command} the.sad.boy01`
    if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah\n\ncontoh: *${usedPrefix}${command} the.sad.boy01*`
    try {
    await m.reply(data.wait)
    await conn.reply(m.chat, `Downloading ig story ${args[0]}`, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink, 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
    })
    //const res = await fetch(API('hardianto', '/api/download/igstory', { username: args[0] }, 'apikey'))
    const res = await fetch(`https://hardianto.xyz/api/download/igstory?username=${args[0]}&apikey=hardianto`)
    var anu = await res.json()
    var anuku = anu.medias
    for (let { url, preview } of anuku) 
    conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
    } catch {
        try {
    const res2 = await scrape.igstory(args[0]).catch(async _=> await yzu.igstory(args[0]))
    for ( const { downloadUrl, url, preview, type, fileType } of res2 )
    conn.sendMedia(m.chat, url, null, { mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
    } catch {
        throw `No media found!`
    }                  
  }
}
handler.help = ['instagramstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^((igs|instagrams)(tory)?(dl)?(downloa?d(er)?)?)$/i

handler.limit = true

module.exports = handler