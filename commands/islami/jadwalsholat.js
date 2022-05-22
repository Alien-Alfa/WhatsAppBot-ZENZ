const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "prayer schedule",
     aliases: ["prayer"],
     use: "<query>",
     desc: "Get Details of Prayer Times With City",
     type: "Islamic",
     example: "%prefix%command Jakarta-Selatan",
     start: async(killua, m, { text, toUpper }) => {
         let fetch = await fetchUrl(global.api("zenz", "/islamic/prayer schedule", { city: text }, "apikey"))
         let i = fetch.result
         let text = `City Prayer Schedule : ${toUpper(text)}\n\n`
         text += `⭔ Date : ${i.date}\n`
         text += `⭔ Dawn : ${i.shubuh}\n`
         text += `⭔ Duha : ${i.duha}\n`
         text += `⭔ Midday : ${i.noon}\n`
         text += `⭔ Asr : ${i.asr}\n`
         text += `⭔ Maghrib : ${i.maghrib}\n`
         text += `⭔ Isha : ${i.isya}`
         killua.sendText(m.from, text, m)
     },
     isQuery: true
}