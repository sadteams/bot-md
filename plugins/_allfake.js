const moment = require('moment-timezone')
let handler = m => m
handler.all = async function (m) {
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
        global.fs = require('fs')
        global.fetch = require('node-fetch')
        const _uptime = process.uptime() * 1000
        const u = await conn.clockString(_uptime)
        global.run = '𝙍𝙪𝙣𝙩𝙞𝙢𝙚' + ' ' + u
        global.ucapan = ucapan()
        global.col = 'https://telegra.ph/file/e44b8c524d9b081d3cab0.jpg'
        global.time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
		global.users = db.data.users[m.sender]
		global.chats = db.data.chats[m.chat]
        global.settings = db.data.settings
        let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
        let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
        global.img = pickRandom(waifu)
        global.fla = pickRandom(flaaa)
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        global.bg = await (await fetch(img)).buffer()
        let res = await fetch(API('https://api.countapi.xyz/hit/bot-md/visits'))
        let json = await res.json()
        global.hit = `${json.value}`
        
        //is fake

		const ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		
        const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
        
        const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999999999999",
                 "ptt": "true"
                        }
	                  } 
                     }
        
         const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":wm,
                 "title": wm,
                 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
                        }
	                  } 
                     }
        
           const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"by : The.sad.boy01","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
        
            const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282331033919@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./src/logo.jpg') //Gambarnye
					},
					"title": wm, //Kasih namalu 
					"description": data.namabot, 
					"currencyCode": "USD",
					"priceAmount1000": "20000000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        
              const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: wm, 
                    jpegThumbnail: fs.readFileSync('./src/logo.jpg')
                          }
                        }
                      }
        
             const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282331033919-1625305606@g.us",
			"inviteCode": "null",
			"groupName": "☬𝚁𝚊𝚡𝚌𝚎𝚄1�71ￄ1�77 ༼༽𝚡 𝚎𝚟𝚒𝚕 𝐎𝔣ᶄ1�71ￄ1�77 ◄1�71ￄ1�77", 
            "caption": wm, 
            'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
		}
	}
}

             const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": `Hmm`,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': wm,
                 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
                        }
                       }
                      }

       global.fake = pickRandom([ ftroli, fkontak, fvn, ftextt, fliveLoc, ftoko, fdocs, fgclink, fgif ])
		// Tambahin ya
	}
}

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌚"
    if (time >= 4) {
        res = "Selamat pagi 🌅"
    }
    if (time > 10) {
        res = "Selamat siang 🌞"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌚"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

