let handler = async (m, { text, conn, usedPrefix }) => {
    let ras = `Halo Kak @${m.sender.split('@')[0]}`
    let sel = `Pilih Suitbot Gunting, Batu, Kertas Dibawah Ya Kak!`
    let rs = `Pilih Disini`
const sections = [ {
	title: `Silahkan Pilih Sesuai Perkiraanmu!`,
	rows: [
	{title: `Gunting`, rowId: `#suitbot gunting `},//, description: ``},
        {title: `Batu`, rowId: `#suitbot batu `},//, description: ``},
	{title: `Kertas`, rowId: `#suitbot kertas `},//, description: ``},
          ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

    if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
   
    //if (!text) return sell
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    let winexp = 500
    let winmoney = 1000
    let loseexp = 250
    let losemoney = 500
    if (text == astro) {
        m.reply(`Seri!\nkamu: *${text}*\nBot: *${astro}*`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += winexp
            global.db.data.users[m.sender].money += winmoney
            m.reply(`Kamu menang!\nKamu: *${text}*\nBot: *${astro}*\n+Rp${winmoney} Money & +${winexp} XP`)
        } else {
            global.db.data.users[m.sender].exp -= loseexp
            global.db.data.users[m.sender].money -= losemoney
            m.reply(`Kamu kalah!\nkamu: *${text}*\nBot: *${astro}*\n-Rp${losemoney} Money & -${loseexp} XP`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += winexp
            global.db.data.users[m.sender].money += winmoney
            m.reply(`Kamu menang!\nKamu: *${text}*\nBot: *${astro}*\n+Rp${winmoney} Money & +${winexp} XP`)
        } else {
            global.db.data.users[m.sender].exp -= loseexp
            global.db.data.users[m.sender].money -= losemoney
            m.reply(`Kamu kalah!\nkamu: *${text}*\nBot: *${astro}*\n-Rp${losemoney} Money & -${loseexp} XP`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += winexp
            global.db.data.users[m.sender].money += winmoney
            m.reply(`Kamu menang!\nKamu: *${text}*\nBot: *${astro}*\n+Rp${winmoney} Money & +${winexp} XP`)
        } else {
            global.db.data.users[m.sender].exp -= loseexp
            global.db.data.users[m.sender].money -= losemoney
            m.reply(`Kamu kalah!\nkamu: *${text}*\nBot: *${astro}*\n-Rp${losemoney} Money & -${loseexp} XP`)
        }
    } else {
        return false
    }
}
handler.help = ['suitbot']
handler.tags = ['game']
handler.command = /^(suitbot)$/i

module.exports = handler
