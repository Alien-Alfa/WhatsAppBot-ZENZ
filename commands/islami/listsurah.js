const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "listsurah",
     aliases: ["sura"],
     desc: "List Of Surah Al-Quran",
     type: "Islamic",
     start: async(killua, m) => {
         let fetch = await fetchUrl(global.api("zenz", "/islamic/listsura", { }, "apikey"))
         let text = `List of Surahs of the Quran\n\n`
         for (var x in fetch.result) {
             text += `${x}. ${fetch.result[x]}\n`
         }
         killua.sendText(m.from, text, m)
     }
}