let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m
handler.all = async function (m) {
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		global.axios = require('axios')
		global.request = require('request')
		global.users = global.db.data.users[m.sender]
		global.chats = global.db.data.chats[m.chat]
        
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		
        global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
        
        global.fvn = {
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
        
         global.ftextt = {
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
        
           global.fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"by : The.sad.boy01","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
        
	       global.fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "the.sad.boy01","h": wm, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
        
            global.ftoko = {
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
					"description": namabot, 
					"currencyCode": "USD",
					"priceAmount1000": "20000000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        
              global.fdocs = {
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
        
             global.fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282331033919-1625305606@g.us",
			"inviteCode": "null",
			"groupName": "☬𝚁𝚊𝚡𝚌𝚎𝚕 ༼༽𝚡 𝚎𝚟𝚒𝚕 𝐎𝔣ᶜ ◉", 
            "caption": `╭─${kki}RULES BOT${kka}
│
├❒ DILARANG TOXIC
├❒ DILARANG SPAM
├❒ DILARANG KIRIM VIRTEX
├❒ DILARANG KIRIM 18+ APAPUN ITU
├❒ DILARANG TELPON / VC
├❒ DILARANG CULIK BOT
├❒ DILARANG PROMOSI
├❒ BOT TIDAK MENERIMA SAVE KONTAK
│
├❏ KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
│
└─${kki}RULES BOT${kka}`, 
            'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
		}
	}
}

             global.fgif = {
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
       
        global.fake = pickRandom(global.fak)
        
        global.fak = [ fvn, fgif, ftroli, fgclink, fliveLoc, fliveLoc2, fdocs, ftoko, ftextt, fkontak ]
		// Tambahin ya
	}
}

module.exports = handler