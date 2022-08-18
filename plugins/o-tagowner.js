let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Ownerku Ada yang memanggil anda ehe ehe:V*`, m)

    let a = "https://telegra.ph/file/a43304aef3ca1c97511fd.jpg"
  conn.sendStimg(m.chat, a, m, {packname: "", author: data.clg2, 
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: data.sc
     }}
  })
    
  /*conn.reply(m.chat, `
Ngapain lu manggil owner ku dek?
kalau mau sewa chat pribadi aja
Gak usah Malu-malu
`.trim(), m)
    let mentionedJid = [m.sender]*/
}
handler.customPrefix = /@62895336282144 |@62895336282144/i
handler.command = new RegExp

module.exports = handler