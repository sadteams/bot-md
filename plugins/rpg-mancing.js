let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, owner }) => { 
     try {
        let __timers = (new Date - global.db.data.users[m.sender].lastfishing)
        let _timers = (240000 - __timers) 
        let timers = clockString(_timers)
        let you = conn.getName(m.sender)
        let user = global.db.data.users[m.sender]
        
        if (global.db.data.users[m.sender].fishingrod > 0 ) {
        if (new Date - global.db.data.users[m.sender].lastfishing > 240000) {
        	
        
        let ikan = `${Math.floor(Math.random() * 30)}`.trim() 
        let lobster = `${Math.floor(Math.random() * 15)}`.trim() 
        let dory = `${Math.floor(Math.random() * 10)}`.trim() 
        let buntal = `${Math.floor(Math.random() * 10)}`.trim() 
        let udang = `${Math.floor(Math.random() * 39)}`.trim()
        let paus = `${Math.floor(Math.random() * 2)}`.trim() 
        let kepiting = `${Math.floor(Math.random() * 27)}`.trim() 
           let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _common = `${pickRandom(['1', '2', '1', '0'])}`
           let common = (_common * 1)
        
        let gggd = 'https://telegra.ph/file/4a2dad6f0f6dfef650bf3.jpg'   
        let mcng = `
*Your 🎣Fishing Results!*
        
🐟Ikan dory : ${dory}
🐡Buntal : ${buntal}
🦞lobster : ${lobster}
🐟 ikan : ${ikan}
🦐 udang : ${udang}
🐋 Paus: ${paus}
🦀 Kepiting: ${kepiting}
_total pancingan↓_
${dory + buntal + lobster + ikan + udang + paus + kepiting}
        
you can cook it to increase stamina or blood💉
_example:_
${ usedPrefix }Cook catfish `    
        setTimeout(() => {                 
        conn.sendButtonImg(m.chat, gggd, mcng, wm, 'Inventory', '.kolam', m)
         if (mythic > 0 ) {
         	global.db.data.users[m.sender].mythic += mythic * 1
         conn.sendButton(m.chat, `You Get 🎁chest mythic ${mythic} item`, wm, 'again', '.mancing', m)
         } 
        if  (common > 0 ) {
        	global.db.data.users[m.sender].common+= common * 1
        conn.sendButton( m.chat, `You Get 🎁chest common ${common} item`, wm, `Again`, `.mancing`, m)
        	}
        }, 38000)

        setTimeout(() => {
                     m.reply(`*The hook is pulled by the fish, and you try to pull it*`)
                      }, 28000)
        setTimeout(() => {
                     m.reply(`*Waiting for the fish to be hooked*`)
                      }, 18000)
       setTimeout(() => {
                     m.reply(`*you throw a fishing hook into the river*`)
                      }, 8000)
       setTimeout(() => {
                     m.reply(`*you go fishing🎣*`)
                      }, 0)
                      
        global.db.data.users[m.sender].dory += dory * 1
         global.db.data.users[m.sender].ikan += ikan * 1
         global.db.data.users[m.sender].lobster += lobster * 1
         global.db.data.users[m.sender].buntal += buntal * 1
         global.db.data.users[m.sender].udang += udang * 1
         global.db.data.users[m.sender].lastfishing += new Date * 1
         user.paus += paus * 1
         user.kepiting += kepiting * 1

        	  } else m.reply(`You're already fishing, wait until ${timers}`)
           } else conn.sendButton(m.chat, `*[❗] kamu tidak punya kail pancingan 🎣*`, wm, `Craft Fishingrod`, '.craft fishingrod', m)
           } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (owner) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
      }
      handler.help = ['mancing','fishing']
handler.tags = ['rpg']
handler.command = /^(mancing|memancing|fish)$/i 

module.exports = handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}