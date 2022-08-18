let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [0895336282144]
│ • Gopay  [0895336282144]
│ • Dana  [0895336282144]
│ • Saweria  [https://saweria.co/thesadboy01]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895336282144
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler