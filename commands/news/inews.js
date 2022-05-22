const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "inews",
     aliases: ["inews"],
     desc: "Latest News From news",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/inews", { }, "apikey"))
         let caption = `Latest News From innews\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.news}\n`
             caption += `⭔ Uploaded : ${i.news_diupload}\n`
             caption += `⭔ News Type : ${i.news_type}\n`
             caption += `⭔ Url : ${i.news_url}\n\n`
         }
         killua.sendText(m.from, caption, m)
     }
}