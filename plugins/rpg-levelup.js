let fetch = require('node-fetch')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://telegra.ph/file/e891ab641d5d71c70d938.png'
  let who = m.sender
  let name = conn.getName(m.sender)
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
        {
          await conn.sendButtonImg(m.chat, pp, `${sa}${kki} To Level Up ${kka}\n${gy} Nama: *${name}*\n${gy} Level: *${user.level}*\n${gy} XP: ( *${user.exp - min}/${xp}* )\n${gy} Kurang *${max - user.exp}* XP lagi levelup!\n${sb}`.trim(), wm, 'On Autolevelup', `${usedPrefix}on autolevelup`, m)
        }
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        {
          await conn.sendButtonImg(m.chat, pp, `${sa}${kki} Level Up ${kka}\n${gy} Nama: *${name}*\n${gy} Level sebelumnya: *${before}*\n${gy} Level sekarang: *${user.level}*\n${sb}\n\nBanyak berinteraksi dengan *BOT* semakin mudah naik level!`.trim(), wm, 'Claim', `${usedPrefix}claim`, m)
        }
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.command = /^levelup$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}