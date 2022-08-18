const axios = require ("axios")
const fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

  conn.reply(m.chat, `_*Wait Process Searching Username*_`, m)
    let anu = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(anu.avatar_url)
    let hasil = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆      *GITHUB STALK*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
_*🪪 Name:*_ ${anu.login == null ? 'Tidak Di Ketahui' : '_' + anu.login + '_'} _*/*_ 
${anu.name == null ? 'Tidak Di Ketahui' : '_' + anu.name + '_'}
_*🏷️ Id:*_ ${anu.id == null ? 'Tidak Di Ketahui' : '_' + anu.id + '_'}
_*✍️ Bio:*_ ${anu.bio == null ? 'Tidak Di Ketahui' : '_' + anu.bio + '_'}
_*🌐 Blog:*_ ${anu.blog == null ? 'Tidak Di Ketahui' : '_' + anu.blog + '_'}
_*🏬 Perusahaan:*_ ${anu.company == null ? 'Tidak Di Ketahui' : '_' + anu.company + '_'}
_*📬 Email:*_ ${anu.email == null ? 'Tidak Di Ketahui' : '_' + anu.email + '_'}
_*📲 Twitter:*_ ${anu.twitter_username == null ? 'Tidak Di Ketahui' : '_' + anu.twitter_username + '_'}
_*🔓 Repo Publik:*_ ${anu.public_repos == null ? 'Tidak Di Ketahui' : '_' + anu.public_repos + '_'}
_*📮 Gists Publik:*_ ${anu.public_gists == null ? 'Tidak Di Ketahui' : '_' + anu.public_gists + '_'}
_*👥 Follower:*_ ${anu.followers == null ? 'Tidak Di Ketahui' : '_' + anu.followers + '_'}
_*👯‍♀️ Following:*_ ${anu.following == null ? 'Tidak Di Ketahui' : '_' + anu.following + '_'}
_*🌍 Lokasi:*_ ${anu.location == null ? 'Tidak Di Ketahui' : '_' + anu.location + '_'}
_*👨‍💻 Link:*_ ${anu.html_url == null ? 'Tidak Di Ketahui' : '_' + anu.html_url + '_'}
_*🧑🏻‍💻 Created:*_ ${anu.created_at == null ? 'Tidak Di Ketahui' : '_' + anu.created_at + '_'}
_*📤Updated:*_ ${anu.updated_at == null ? 'Tidak Di Ketahui' : '_' + anu.updated_at + '_'}
`
    await conn.send2ButtonImg(m.chat, thumb, hasil, wm, `Menu`, `.m`, `Donasi`, `.donasi`, m)
}
handler.help = ['githubstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(ghstalk|githubstalk)$/i
handler.limit = true

module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}