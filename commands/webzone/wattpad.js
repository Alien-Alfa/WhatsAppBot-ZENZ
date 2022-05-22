const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wattpad",
    aliases: ["wattpad"],
    use: "<query>",
    desc: "Search stories From wattpad",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/wattpad", { query: text }, "apikey"))
        let caption = `Wattpad Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Read : ${i.read}\n`
            caption += `⭔ Divote : ${i.divote}\n`
            caption += `⭔ Chapter : ${i.chapter}\n`
            caption += `⭔ Time : ${i.time}\n`
            caption += `⭔ Url : ${i.url}\n`
            caption += `⭔ Thumb : ${i.thumb}\n`
            caption += `⭔ Description : ${i.description}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}