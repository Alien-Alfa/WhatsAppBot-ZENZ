const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asmaulhusna",
    aliases: ["asmaallah"],
    desc: "Get Asmaul Husna & Translate",
    type: "Islamic",
    start: async(killua, m, { text, args }) => {
        if (text) {
            let fetch = await fetchUrl('https://raw.githubusercontent.com/BochilTeam/database/master/religion/asmaulhusna.json')
            let result = fetch.filter(v => v.index == text).map(i => `
No : ${i.index}
${i.arabic}
- ${i.latin}
It means :
- Id : ${i.translation_id}
- En : ${i.translation_en}
            `)
            killua.sendText(m.from, result, m)
        } else if (text.endsWith("--all")) {
            let fetch = await fetchUrl('https://raw.githubusercontent.com/BochilTeam/database/master/religion/asmaulhusna.json')
            let text = ""
            for (let i of fetch) {
                text += `
No : ${i.index}
${i.arabic}
- ${i.latin}
It means :
- Id : ${i.translation_id}
- En : ${i.translation_en}\n\n
                `
            }
            killua.sendText(m.from, text, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/islamic/asmaulhusna", { }, "apikey"))
            killua.sendText(m.from, `
No : ${fetch.result.index}
${fetch.result.arabic}
- ${fetch.result.latin}
It means :
- Id : ${fetch.result.translation_id}
- En : ${fetch.result.translation_en}
            `, m)
        }
    }
}