let handler = async (m, { conn }) => {
  let LastClaim = global.db.data.users[m.sender].lastclaim
  let cdm = `${MeNit(new Date - LastClaim)}`
  let cds = `${DeTik(new Date - LastClaim)}`
  let cd1 = Math.ceil(44 - cdm)
  let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
    global.db.data.users[m.sender].money += 7000
    conn.sendButton(m.chat, `Nih gaji lu @${m.sender.split('@')[0]} +Rp 7.000`, wm, m, `Balance`, `.balance`, m, { mentions: [m.sender] })
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else throw `Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`
}
handler.help = ['gajian']
handler.tags = ['rpg']
handler.command = /^(gaji(an)?)$/i

handler.group = true
handler.register = true

module.exports = handler

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0)).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
}