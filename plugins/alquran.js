let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`
    //if (isNaN(args)) throw `Hanya angka contoh *${usedPrefix}${command} 1 3*`
    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    let json = await res.json()
    let mes = `${json.result.data.text.arab}
    
${json.result.data.translation.id}
( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )`
    const sentMsg = await m.reply(mes)
    await conn.sendMedia(m.chat, json.result.data.audio.primary, sentMsg)
    await conn.sendMedia(m.chat, json.result.data.audio.primary, sentMsg, {ptt: true })
}

handler.help = ['alquran <114 1>']
handler.tags = ['islamic']
handler.command = /^(al)?quran$/i
module.exports = handler
