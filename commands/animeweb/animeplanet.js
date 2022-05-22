const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "animeplanet",
     aliases: [],
     use: "<query>",
     desc: "Search Anime From Animeplanet",
     type: "animeweb",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text }) => {
         let fetch = await fetchUrl(global.api("zenz", "/anime/animeplanet", { query: text }, "apikey"))
         let caption = `Animeplanet Search :\n\n`
         for (let i of fetch.result) {
             caption += `⭔ Title : ${i.manga_name}\n`
             caption += `⭔ Link : ${i.manga_url}\n\n`
         }
         //killua.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption }) with positive internet connection
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}