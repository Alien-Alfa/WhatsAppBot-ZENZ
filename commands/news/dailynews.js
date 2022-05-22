const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "dailynews",
     aliases: ["dailynews"],
     desc: "Latest News From Dailynews",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/dailynews", { }, "apikey"))
         let caption = `Latest News From Dailynews\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.news}\n`
             caption += `⭔ Url : ${i.news_url}\n\n`
         }
         killua.sendFile(m.from, fetch.result[0].news_thumb, "", m, { caption })
     }
}