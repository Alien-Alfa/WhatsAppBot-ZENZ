const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "cinema schedule",
     alias: ["cinema schedule"],
     use: "<query>",
     desc: "Search Schedule From Watch Schedule",
     type: "webzone",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text, toUpper }) => {
         let fetch = await fetchUrl(global.api("zenz", "/webzone/cinema-schedule", { city: text }, "apikey"))
         let caption = `City Cinema Schedule : ${toUpper(text)}\n\n`
         for (let i of fetch.result) {
             caption += `⭔ Location : ${i.title}\n`
             caption += `⭔ Thumb : ${i.thumb}\n`
             caption += `⭔ Url : ${i.url}\n\n`
         }
         killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
     },
     isQuery: true
}