const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "listkota",
     aliases: ["city"],
     desc: "List Of Cities throughout Indonesia",
     type: "Islamic",
     start: async(killua, m) => {
         let fetch = await fetchUrl(global.api("zenz", "/islamic/listkota", { }, "apikey"))
         let text = `List of Cities All over Indonesia\n\n`
         for (let i of fetch.result) {
             text += `⭔ Province : ${i.province}\n`
             text += `⭔ City : \n${i.city.join("\n")}\n`
             text += `\n`
         }
         killua.sendText(m.from, text, m)
     }
}