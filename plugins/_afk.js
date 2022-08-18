let handler = m => m
handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let img = 'https://telegra.ph/file/630a9a34ab2859888ec36.jpg'
    let sp = 'https://telegra.ph/file/c468a0f03090cb5ea7e51.jpg'
    if (user.afk > -1) {
        this.sendTemplateButtonLoc(m.chat, sp, `
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${this.clockString(new Date - user.afk)}
`.trim(), wm,)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        this.sendTemplateButtonLoc(m.chat, img, `
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${this.clockString(new Date - afkTime)}
`.trim(), wm,)
    }
    return true
}

module.exports = handler