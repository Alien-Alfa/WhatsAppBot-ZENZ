const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "koransindo",
     alias: ["koransindonews"],
     desc: "Latest News From Koransindo",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/koransindo", { }, "apikey"))
         let caption = `Latest News From Koransindo\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.news}\n`
             caption += `⭔ News Type : ${i.news_type}\n`
             caption += `⭔ Url : ${i.news_url}\n\n`
         }
         killua.sendText(m.from, caption, m)
     }
}