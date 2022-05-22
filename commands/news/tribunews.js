const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "tribunews",
     aliases: ["tribunnews"],
     desc: "Latest News From Tribunnews",
     type: "news",
     example: `%prefix%command`,
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/api/tribunews", { }, "apikey"))
         let caption = `Latest News From Tribunnews\n\n`
         for (let i of fetch.result) {
             caption += `⭔ News Title : ${i.title}\n`
             caption += `⭔ Uploaded : ${i.title}\n`
             caption += `⭔ Desc : ${i.desc}\n`
             caption += `⭔ Url : ${i.url}\n\n`
         }
         killua.sendText(m.from, caption, m)
     }
}