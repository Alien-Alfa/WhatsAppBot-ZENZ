const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "tale of the prophet",
    aliases: ["prophet"],
    use: "<query>",
    desc: "The Story of the Prophet",
    type: "Islamic",
    example: "%prefix%command <prophet>\n%prefix%command Muhammad",
    start: async(killua, m, { text }) => {
        if (text) {
            title = text.toLowerCase()
            let fetch = await fetchUrl(global.api("zenz", `/islamic/saga/${title}`, {}, "apikey"))
            let text = `⭔ Name : ${fetch.result.name}\n⭔ Birth : ${fetch.result.birth}\n⭔ Age : ${fetch.result.age}\n⭔ Location : ${fetch. result.place}\n⭔ Story :\n${fetch.result.story}`
            killua.sendFile(m.from, "https://i.pinimg.com/originals/a6/81/c5/a681c55ca1bee611c39d3b4a58712dc3.jpg", "", m, { caption: text })
        } else if (!text) {
            const sections = [{
                title: "The Story of the Prophet",
                rows: [
                    {title: "The Story of the Prophet Adam", rowId: "The Story of the Prophet Adam"},
                    {title: "The Story of the Prophet Idris", rowId: "The Story of the Prophet Idris"},
                    {title: "The Story of the Prophet Noah", rowId: "The Story of the Prophet Noah"},
                    {title: "The Story of the Prophet Hud", rowId: "The Story of the Prophet Hud"},
                    {title: "The Story of the Prophet Sholeh", rowId: "The Story of the Prophet Sholeh"},
                    {title: "The Story of the Prophet Ibrahim", rowId: "The Story of the Prophet Ibrahim"},
                    {title: "The Story of the Prophet Lut", rowId: "The Story of the Prophet Lut"},
                    {title: "The Story of the Prophet Ismail", rowId: "The Story of the Prophet Ismail"},
                    {title: "The Story of the Prophet Ishaq", rowId: "The Story of the Prophet Ishaq"},
                    {title: "The Story of the Prophet Yaqub", rowId: "The Story of the Prophet Yaqub"},
                    {title: "The Story of the Prophet Yusuf", rowId: "The Story of the Prophet Yusuf"},
                    {title: "The Story of the Prophet Ayyub", rowId: "The Story of the Prophet Ayyub"},
                    {title: "The Story of the Prophet Shuaib", rowId: "The Story of the Prophet Shuaib"},
                    {title: "The Story of the Prophet Moses", rowId: "The Story of the Prophet Musa"},
                    {title: "The Story of the Prophet Harun", rowId: "The Story of the Prophet Harun"},
                    {title: "The Story of the Prophet Dzulkifli", rowId: "The Story of the Prophet Dzulkifli"},
                    {title: "The Story of the Prophet David", rowId: "The Story of the Prophet David"},
                    {title: "The Story of the Prophet Solomon", rowId: "The Story of the Prophet Solomon"},
                    {title: "The Story of the Prophet Ilyas", rowId: "The Story of the Prophet Ilyas"},
                    {title: "The Story of the Prophet Ilyasa", rowId: "The Story of the Prophet Ilyasa"},
                    {title: "The Story of the Prophet Yunus", rowId: "The Story of the Prophet Yunus"},
                    {title: "The Story of the Prophet Zakariya", rowId: "The Story of the Prophet Zakariya"},
                    {title: "The Story of the Prophet Yahya", rowId: "The Story of the Prophet Yahya"},
                    {title: "The Story of Prophet Isa", rowId: "The Story of Prophet Isa"},
                    {title: "The Story of the Prophet Muhammad", rowId: "The Story of the Prophet Muhammad"}
                ]
            }]
            const listMessage = {
                text: "List of 25 Prophets",
                footer: config.footer,
                buttonText: "OPEN LIST",
                sections
            }
            const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
        }
    }
}