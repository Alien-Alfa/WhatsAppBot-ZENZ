const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "bbcnews",
     aliases: ["bbc"],
     desc: "Latest News From bbc",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/bbc", { }, "apikey"))
         let caption = `Latest News From BBC\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.news}\n`
             caption += `⭔ Uploaded : ${i.news_diupload}\n`
             caption += `⭔ Url : ${i.news_url}\n\n`
         }
         killua.sendText(m.from, caption, m)
     }
}