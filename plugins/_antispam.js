let handler = m => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (!(m.sender in this.spam)) {
        let spaming = {
        jid: await m.sender, 
        spam: 0,
        lastspam: 0
            
        }
        this.spam[spaming.jid] = spaming
    } else try {
        this.spam[m.sender].spam += 1
        if (new Date - this.spam[m.sender].lastspam > 4000) {
            if (this.spam[m.sender].spam > 6) {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
                //global.db.data.users[m.sender].banned = true
                let a = "https://telegra.ph/file/e43f05b8dd939c7fa74e0.png"
  conn.sendStimg(m.chat, a, m, {packname: packname, author: author, 
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
            } else {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
            }
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = handler