let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (db.data.chats[m.chat].expired < 1) throw `Group Ini Tidak DiSet Expired !`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    conn.reply(m.chat, `*${data.kki} 岽噚岽樕�岽囜磪 ${data.kka}*
${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['cekexpired']
handler.tags = ['group']
handler.command = /^((cek)?expired)$/i
handler.group = true

module.exports = handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Days 鈽�锔廫n" + hours + " Hours 馃晲\n" + minutes + " Minute 鈴�";
    // +minutes+":"+sec;
}