import { owner, wm, packname } from '../settings.js'
import fetch from 'node-fetch'
  const data = owner.filter(([id, isCreator]) => id && isCreator)
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
    let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await conn.profilePictureUrl(m.sender, 'image')
	} catch (e) {
    } finally {
	conn.p = conn.p ? conn.p : {}
	conn.p[m.chat] = [
	await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: 'https://github.com/sadteams/bot-md',
    mediaType: 2,
    description: 'di atas langit masih ada langit', 
    title: packname,
    body: wm,
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: 'https://github.com/sadteams/bot-md'
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hay kak @${m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, mentions: [m.sender] }, { quoted: conn.p[m.chat][0]
  })
  await delay(100)
  return delete conn.p[m.chat]
 }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
