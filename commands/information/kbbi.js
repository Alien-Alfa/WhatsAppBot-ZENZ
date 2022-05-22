const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "kbbi",
     aliases: ["kbbi"],
     use: "<query>",
     desc: "Big Indonesian Dictionary",
     type: "information",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/kbbi", { query: text }, "apikey"))
         let caption = `Kbbi Meaning Of ${toUpper(text)} :\n\n`
         let i = fetch.result
         caption += `${i.arti}`
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}