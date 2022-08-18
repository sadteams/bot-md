let handler = async(m, { conn, command, text }) => {
  if (!text) throw `Masukkan anime-nya!`
  m.reply(wait)
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw `${command} *${text}* tidak ditemukan!` //await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
  let ingfonya = `鉁笍 *Title:* ${title}
馃巻锔� *Episodes:* ${episodes}
馃拰锔� *Rating:* ${rated}
鉂わ笍 *Score:* ${score}
馃挌锔� *Synopsis:* ${synopsis}
`.trim()
conn.send3TemplateButtonImg(m.chat, image_url, ingfonya, wm, `馃寪 Url Anime Info ${text}`, `${url}`, m)
} 
handler.help = ['animeinfo <query>']
handler.tags = ['anime']
handler.command = /^(anime?ing?fo|ing?foanime?)$/i

handler.register = true 

module.exports = handler