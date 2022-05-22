const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gsmarena",
    aliases: ["gsmarena"],
    use: "<query>",
    desc: "Search Phone spec From Gsmarena",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/gsmarena", { query: text }, "apikey"))
        let caption = `Gsmarena Search Query : ${toUpper(text)}\n\n`
        caption += `⭔ Title : ${fetch.result.title}\n`
        caption += `⭔ Release : ${fetch.result.release}\n`
        caption += `⭔ Size : ${fetch.result.size}\n`
        caption += `⭔ Type : ${fetch.result.type}\n`
        caption += `⭔ Storage : ${fetch.result.storage}\n`
        caption += `⭔ Display : ${fetch.result.display}\n`
        caption += `⭔ Inchi : ${fetch.result.inchi}\n`
        caption += `⭔ Pixel : ${fetch.result.pixel}\n`
        caption += `⭔ Video Pixel : ${fetch.result.videoPixel}\n`
        caption += `⭔ RAM : ${fetch.result.ram}\n`
        caption += `⭔ Chipset : ${fetch.result.chipset}\n`
        caption += `⭔ Battery : ${fetch.result.batrai}\n`
        caption += `⭔ Battery Brand : ${fetch.result.batre_brand}\n\n`
        caption += `⭔ Details : ${fetch.result.detail}\n`
        killua.sendFile(m.from, fetch.result.thumb, "", m, { caption })
    },
    isQuery: true
}