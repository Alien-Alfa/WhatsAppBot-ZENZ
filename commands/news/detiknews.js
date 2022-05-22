const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "detiknews",
     aliases: ["detiknews"],
     desc: "Latest News From Detiknews",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/detiknews", { }, "apikey"))
         let caption = `Latest News From Detiknews\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.news}\n`
             caption += `⭔ Uploaded : ${i.news_diupload}\n`
             caption += `⭔ Url : ${i.news_url}\n\n`
         }
         killua.sendFile(m.from, fetch.result[0].news_thumb, "", m, { caption })
     }
}