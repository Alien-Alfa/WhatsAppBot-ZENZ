const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "kissmanga",
     aliases: [],
     use: "<query>",
     desc: "Search Anime From Kissmanga",
     type: "animeweb",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text }) => {
         let fetch = await fetchUrl(global.api("zenz", "/anime/kissmanga", { query: text }, "apikey"))
         let caption = `Kissmanga Search :\n\n`
         for (let i of fetch.result) {
             caption += `⭔ Title : ${i.manga_name}\n`
             caption += `⭔ Link : ${i.manga_url}\n\n`
         }
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}