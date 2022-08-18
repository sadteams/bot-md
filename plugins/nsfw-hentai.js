let handler = async(m, { conn, usedPrefix: _p, command: _c, text, }) => {
     let chat = db.data.chats[m.chat]
    if (!chat.nsfw || chat.isBanned) throw `Fitur NSFW Tidak Aktif`
    let ras = `Halo Kak @${m.sender.split('@')[0]}`
    let sel = `${_c} nya Kan Ada Beberapa Jenis Tuh, Kakak Mau ${_c} Jenis Apa? Pilih Dibawah Ya Kak!\nHarap Perhatikan Jika Ada Error Bisa Lapor Ke Owner`
    let rs = `Pilih Disini`
const sections = [ {
	title: `Silahkan Pilih List Type ${_c} Dibawah!`,
	rows: [
	{title: `${_c} Neko`, rowId: `${_p + _c} neko`, description: ``},
    {title: `${_c} Waifu`, rowId: `${_p + _c} waifu`, description: ``},
	{title: `${_c} Ero`, rowId: `${_p + _c} ero`, description: ``},
	{title: `${_c} loli`, rowId: `${_p + _c} loli`, description: ``},
	{title: `${_c} trap`, rowId: `${_p + _c} trap`, description: ``},
	{title: `${_c} Blowjob`, rowId: `${_p + _c} blowjob`, description: ``},
	{title: `${_c} Yaoi`, rowId: `${_p + _c} yaoi`, description: ``},
	{title: `${_c} Milf`, rowId: `${_p + _c} milf`, description: ``},
	{title: `${_c} ecchi`, rowId: `${_p + _c} ecchi`, description: ``},
	{title: `${_c} Ahegao`, rowId: `${_p + _c} ahegao`, description: ``},
	{title: `${_c} Holo lewd`, rowId: `${_p + _c} hololewd`, description: ``},
	{title: `${_c} Side Oppai`, rowId: `${_p + _c} sideoppai`, description: ``},
	{title: `${_c} Anime Feets`, rowId: `${_p + _c} animefeets`, description: ``},
	{title: `${_c} Anime Booty`, rowId: `${_p + _c} animebooty`, description: ``},
	{title: `${_c} Anime Thighss`, rowId: `${_p + _c} animethighss`, description: ``},
	{title: `${_c} Hentai Femdom`, rowId: `${_p + _c} hentaifemdom`, description: ``},
	{title: `${_c} Lewd Anime Girls`, rowId: `${_p + _c} lewdanimegirls`, description: ``},
	{title: `${_c} Big Anime Tiddies`, rowId: `${_p + _c} biganimetiddis`, description: ``},
	{title: `${_c} Hentai For Everyone`, rowId: `${_p + _c} hentaiforeveryone`, description: ``},
	{title: `${_c} Cum`, rowId: `${_p + _c} cum`, description: ``},
	{title: `${_c} yuri`, rowId: `${_p + _c} yuri`, description: ``},
	{title: `${_c} Solo`, rowId: `${_p + _c} solo`, description: ``},
	{title: `${_c} Anal`, rowId: `${_p + _c} anal`, description: ``},
	{title: `${_c} Keta`, rowId: `${_p + _c} keta`, description: ``},
	{title: `${_c} Tits`, rowId: `${_p + _c} tits`, description: ``},
	{title: `${_c} Kuni`, rowId: `${_p + _c} kuni`, description: ``},
	{title: `${_c} Pussy`, rowId: `${_p + _c} pussy`, description: ``},
	{title: `${_c} Ero Yuri`, rowId: `${_p + _c} eroyuri`, description: ``},
	{title: `${_c} Ero Feet`, rowId: `${_p + _c} erofeet`, description: ``},
	{title: `${_c} Holo Ero`, rowId: `${_p + _c} holoero`, description: ``},
	{title: `${_c} Ero Kemi`, rowId: `${_p + _c} erokemo`, description: ``},
	{title: `${_c} Futanari`, rowId: `${_p + _c} futanari`, description: ``},
	{title: `${_c} Lewd Kemo`, rowId: `${_p + _c} lewdkemo`, description: ``},
    {title: `${_c} nhentai Search`, rowId: `${_p} nhs`, description: ``},
    {title: `${_c} nhentai Pdf`, rowId: `${_p} nhpdf`, description: ``},
    {title: `${_c} nhentai Detail`, rowId: `${_p} nh`, description: ``},
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

    if(!text) await conn.sendMessage(m.chat, listMessage, { quoted: m })

let im = `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=SGWN`
conn.sendButtonImg(m.chat, im, `Nih Kak ${_c + ' ' + text}nya`, wm, 'Next ?', `${_p + _c + ' ' + text}`, m, {
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

}
handler.help = ['nsfw', 'hentai'].map(v => v + ' <query>')
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)$/i

handler.nsfw = true
handler.premium = true

module.exports = handler