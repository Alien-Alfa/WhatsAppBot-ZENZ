const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "wikipedia",
     aliases: ["wiki"],
     use: "<query>",
     desc: "Get Information From Wikipedia",
     type: "information",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/wikipedia", { query: text }, "apikey"))
         let caption = `Wikipedia From ${text} :\n\n`
         let i = fetch.result
         caption += `${i.content}\n`
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}