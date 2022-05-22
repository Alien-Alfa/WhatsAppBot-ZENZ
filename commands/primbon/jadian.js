const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "made",
     aliases: ["occurrence"],
     use: "<query>",
     desc: "Check Meaning of Creation",
     type: "primbon",
     example: `%prefix%command 11 06 2007`,
     start: async(killua, m, { args, prefix, command }) => {
         let [a, b, c] = args
         if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
         let fetch = await fetchUrl(global.api("zenz", `/api/created/${a}/${b}/${c}`, {}, "apikey"))
         let caption = `Primbon Meaning:\n\n`
         let i = fetch.result
         caption += `⭔ Note : ${i.message}\n`
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}