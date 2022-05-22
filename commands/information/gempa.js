const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "earthquake",
    alias: ["gempabmkg"],
    desc: "Get Earthquake Information From BMKG",
    type: "information",
    example: `%prefix%command`,
    start: async(killua, m, { }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/bmkg/earthquake", { }, "apikey"))
        let caption = `Covid-19 Information :\n\n`
        let i = fetch.result
        caption += `⭔ Date : ${i.date}\n`
        caption += `⭔ Hour : ${i.hour}\n`
        caption += `⭔ Datetime : ${i.datetime}\n`
        caption += `⭔ Coordinates : ${i.coordinates}\n`
        caption += `⭔ Latitude : ${i.latitude}\n`
        caption += `⭔ Longitude : ${i.longitude}\n`
        caption += `⭔ Magnitude : ${i.magnitude}\n`
        caption += `⭔ Depth : ${i.depth}\n`
        caption += `⭔ Region : ${i.region}\n`
        caption += `⭔ Potential : ${i.potential}\n`
        caption += `⭔ Felt : ${i.felt}\n`
        caption += `⭔ Shakemap : ${i.shakemap}\n`
        killua.sendFile(m.from, i.shakemap, "", m, { caption })
    }
}