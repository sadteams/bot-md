const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { igdl } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link`
 if (args[0].startsWith('https://instagram.com/stories')) throw `sepertinya kamu menggunakan link story, untuk mendownload Instagram Story silahkan gunakan command di bawah\n\n*${usedPrefix}instagramstory <username>*`
 if (!args[0].match(/(https|http):\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
   await m.reply(data.wait)
   await conn.reply(m.chat, 'Downloading media from Instagram', m, {
   contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink, 
    title: run,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
   })
   try {
   var a = await instagramdl(args[0])
   let urla = a[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urla}`)).data
   for(let { thumbnail, url } of a)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var b = await instagramdlv2(args[0])
   let urlb = b[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlb}`)).data
   for(let { thumbnail, url } of b)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var c = await instagramdlv3(args[0])
   let urlc = c[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlc}`)).data
   for(let { thumbnail, url } of c)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var d = await instagramdlv4(args[0])
   let urld = d[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urld}`)).data
   for(let { thumbnail, url } of d)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var e = igdl(args[0])
   let urle = e[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urle}`)).data
   for (let { type, fileType, url, downloadUrl, preview } of e) 
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   throw data.eror 
     }
    }
   }
  }
 }
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram)(dl)?(downloa?d(er)?)?$/i

handler.limit = true

module.exports = handler