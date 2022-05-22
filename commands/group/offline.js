module.exports = {
    name: "offline",
    aliases: ["mute"],
        use: "<options>",
    desc: "Enable or disable BOT for groups",
        type: "group",
        example: "%prefix%command enable or disable",
        noLimit: true,
        start: async(killua, m, { text, prefix, command }) => {
            if (text === 'enable') {
                if (isOffline === true) return m.reply('Mute already active')
                group.addOffline(m.from, _group)
                m.reply(`Success BOT Offline For This Group\n\n_${prefix + command} disable For Unmute BOT_`)
            } else if (text === 'disable') {
                if (isOffline === false) return m.reply('Mute already deactive')
                group.delOffline(m.from, _group)
                m.reply(`Success BOT Online For This Group`)
            } else {
                let buttons = [
                    { buttonId: `offline enable `, buttonText: { displayText: 'ENABLE'}, type: 1 },
                     {buttonId: `offline disable `, buttonText: { displayText: 'DISABLE'}, type: 1 }
                ]
                let buttonMessage = {
                    text: `*⭔ Offline Status:* ${group.checkOffline(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Select enable or disable!_`,
                    footer: config.footer,
                    buttons: buttons,
                    headerType: 4
                }
                killua.sendMessage(m.from, buttonMessage, { quoted: m })
            }
    },
        isGroup: true,
        isAdmin: true,
        isOffline: true
    }