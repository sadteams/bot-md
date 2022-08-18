let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let paus =global.db.data.users[m.sender].paus 
let kepiting = global.db.data.users[m.sender].kepiting 
let gurita = global.db.data.users[m.sender].gurita 
let cumi = global.db.data.users[m.sender].cumi 
let buntal = global.db.data.users[m.sender].buntal 
let dory = global.db.data.users[m.sender].dory 
let lumba = global.db.data.users[m.sender].lumba 
let lobster = global.db.data.users[m.sender].lobster 
let hiu = global.db.data.users[m.sender].hiu 
let udang = global.db.data.users[m.sender].udang 
let ikan = global.db.data.users[m.sender].ikan 
let orca = global.db.data.users[m.sender].orca
let name = m.fromMe ? conn.user : conn.contacts[m.sender]

let zer =`
 [  KOLAM  *${name.vnmae || name.notify || name.name}*  ]
*➡️   ️ 🦀 = [ ${kepiting} ] Ekor Kepiting*
*➡️   ️ 🦞 = [ ${lobster} ] Ekor Lobster*
*➡️   ️ 🦐 = [ ${udang} ] Ekor Udang*
*➡️   ️ 🦑 = [ ${cumi} ] Ekor Cumi*
*➡️   ️ 🐙 = [ ${gurita} ] Ekor Gurita*
*➡️   ️ 🐡 = [ ${buntal} ] Ekor Buntal*
*➡️   ️ 🐠 = [ ${dory} ] Ekor Dory*
*➡️   ️ 🐟 = [ ${orca} ] Ekor Orca*
*➡️   ️ 🐬 = [ ${lumba} ] Ekor Lumba* 
*➡️   ️ 🐳 = [ ${paus} ] Ekor Paus*
*➡️   ️ 🦈 = [ ${hiu} ] Ekor Hiu*
 *TOTAL SEMUA*: ${kepiting + lobster + udang + cumi + gurita + buntal + dory + orca + lumba + paus + hiu }
 `.trim()
     conn.reply(m.chat, zer, m)

 listMsg = {
 buttonText: 'MULAI',
 footerText: wm,
 description: `Emm y udah lah mending main game aja`,
 sections: [
                     {
                      "title": `Cari ☺️`,
 rows: [
                           {
                              "title": "☺️\n\nIya bg gw emang 🐶, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           },
                           {
                              "title": "☺️\n\nIya bg gw emang 🐷, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
} 
handler.help = ['kolam']
handler.customPrefix = ['kolam']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)