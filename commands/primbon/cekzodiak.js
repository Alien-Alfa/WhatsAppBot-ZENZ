const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "chekzodiac",
    aliases: ["zodiac","checkzodiac"],
    use: "<query>",
    desc: "Check Zodiac Meaning",
    type: "primbon",
    example: `\nList Type :\n\n${type().join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/zodiac", { query: text }, "apikey"))
        let caption = `Primbon Zodiac Meaning :\n\n`
        let i = fetch.result.result
        caption += `⭔ Zodiac name : ${i.zodiac}\n`
        caption += `⭔ Lucky number : ${i.lucky_number}\n`
        caption += `⭔ Lucky scent : ${i.lucky_scent}\n`
        caption += `⭔ Revolving planets : ${i.revolving_planets}\n`
        caption += `⭔ Lucky flower : ${i.lucky_flower}\n`
        caption += `⭔ Lucky color : ${i.lucky_color}\n`
        caption += `⭔ Lucky stone : ${i.lucky_stone}\n`
        caption += `⭔ Lucky element : ${i.luck_element}\n`
        caption += `⭔ Zodiac pair : ${i.zodiac_couple}\n\n`
        caption += `⭔ Note : ${i.note}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}

function type() {
    returns [
        "CAPRICORN (22 December - 20 January)",
        "AQUARIUS (January 21 - February 19)",
        "PISCES (February 20 - March 20)",
        "ARIES (March 21 – April 19)",
        "TAURUS (April 21 - May 20)",
        "GEMINI (May 21 - June 21)",
        "CANCER (June 22 - July 22)",
        "LEO (July 23 - August 23)",
        "VIRGO (August 24 - September 22)",
        "LIBRA (23 September - 23 October)",
        "SCORPIO (24 October - 22 November)",
        "SAGITARIUS (November 23 - December 21)"
    ]
}