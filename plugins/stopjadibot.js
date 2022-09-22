let handler  = async (m, { conn, text}) => {
	if(typeof global.conns[m.sender] === 'object' && global.conns[m.sender] === conn){
		await conn.ws.end()
	} else {
		if(global.rowner[m.sender] !== 'undefined'){
			await conn.ws.end() 
		} else { return m.reply('Only Real Owner!') }
	}
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
