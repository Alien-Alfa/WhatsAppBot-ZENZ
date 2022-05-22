const { fetchUrl } = require("../../lib/Function")

module.exports = {
     name: "playstore",
     aliases: ["pstore"],
     use: "<query>",
     desc: "Search Apps From PlayStore",
     type: "webzone",
     example: `%prefix%command <query>`,
     start: async(killua, m, { text, toUpper }) => {
         let fetch = await fetchUrl(global.api("zenz", "/webzone/playstore", { query: text }, "apikey"))
         let caption = `PlayStore Search Query : ${toUpper(text)}\n\n`
         for (let i of fetch.result) {
             caption += `⭔ Name : ${i.name}\n`
             caption += `⭔ App Url : ${i.link}\n`
             caption += `⭔ Developer : ${i.developer}\n`
             caption += `⭔ Dev Details : ${i.link_dev}\n`
             caption += `\n─────────────────\n\n`
         }
         killua.sendText(m.from, caption, m)
     },
     isQuery: true
}