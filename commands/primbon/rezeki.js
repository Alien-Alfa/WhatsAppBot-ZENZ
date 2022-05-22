const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "sustenance",
     alias: ["sustenance"],
     use: "<query>",
     desc: "Check for Weton's Sustenance Day",
     type: "primbon",
     example: `%prefix%command 11 06 2007`,
     start: async(killua, m, { args, prefix, command }) => {
         let [a, b, c] = args
         if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
         let fetch = await fetchUrl(global.api("zenz", `/api/rejekiweton/${a}/${b}/${c}`, {}, "apikey"))
         let caption = `Primbon Sustenance Day :\n\n`
         let i = fetch.result.message
         caption += `⭔ Note : ${i.explanation}\n`
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}