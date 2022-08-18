let handler = async (m, { conn,isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    for (let i of anu) {
    await delay(500)
    conn.send3ButtonLoc(i, await conn.resize('https://telegra.ph/file/b2ae8a0e437e4252d5124.png', 280, 210), pesan, wm, 'Menu', '.menu', 'Owner', '.owner', 'Donasi', '.donasi', m)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

module.exports = handler