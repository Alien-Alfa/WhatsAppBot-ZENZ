module.exports = {
    name: "menu",
    aliases: ["help","?"],
    desc: "List all commands",
    type: "play",
    start: async(killua, m, { commands, args, prefix, text, toUpper }) => {
        const { pushName, sender } = m
        if (args[0]) {
            letdata = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias ​​:* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text /gi,text)}`)
            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")} `)
        } else {
            let text = `Hello, ${pushName === undefined ? sender.split("@")[0] : pushName}\nHere is the Command List\n\n`

            for (let type of commands.type) {
                text += `┌──⭓ *${toUpper(type)} Menu*\n`
                text += `│\n`
                text += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd .use ? " " + cmd.use : ""}`).join("\n")}\n`
                text += `│\n`
                text += `└───────⭓\n\n`
            }

            text += `Send ${prefix}help followed by a command name to get detail of command, ex: ${prefix}help sticker`;
            let templateButtons = [
                { urlButton: { displayText: "Source Code", url: "https://github.com/zhwzein/Killua-Zoldyck" } },
                { urlButton: { displayText: "Main APIs", url: "http://zenzapis.xyz" } },
                { quickReplyButton: { displayText: "Button 1", id: "#" } },
                { quickReplyButton: { displayText: "Button 2", id: "#" } },
                { quickReplyButton: { displayText: "Button 3", id: "#" } },
            ]
            
            let templateMessage = {
                image: { url: 'https://camo.githubusercontent.com/23f3195d91e7095ae37ef6a22475b9f1206f8334bc3e5ca61637f7d7e8cf962a/68747470733a2f2f692e70696e696d672e636f6d2f373336782f66662f38372f62372f66663837623730653963396465613464396361333263393533386138316333622e6a7067' },
                captions: text,
                footer: config.footer,
                templateButtons: templateButtons
            }

            killua.sendMessage(m.from, templateMessage, { quoted: m })
        }
    },
    noLimit: true,
}