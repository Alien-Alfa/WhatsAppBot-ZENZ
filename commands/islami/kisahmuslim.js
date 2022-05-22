const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "muslim story",
     aliases: ["Muslim"],
     desc: "The Story of Muslims",
     type: "Islamic",
     example: "%prefix%command",
     start: async(killua, m, { }) => {
         let fetch = await fetchUrl(global.api("zenz", "/islamic/muslim", {}, "apikey"))
         let text = `⭔ Title : ${fetch.result.Title}\n⭔ Story :\n${fetch.result.Stories}`
         killua.sendFile(m.from, fetch.result.thumb, "", m, { caption: text })
     },
}