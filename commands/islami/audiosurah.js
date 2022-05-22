const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
      name: "audioayat",
      aliases: ["verse ordio"],
      use: "<query>",
      desc: "Download Audio From audioayat",
      type: "Islamic",
      example: "%prefix%command sura number|verse number",
      start: async(killua, m, { text, prefix, command }) => {
          if (!text.includes('|')) return m.reply(`Example : ${prefix + command} 1|1`)
          let [a, b] = text.split`|`
          killua.sendFile(m.from, global.api("zenz", `/islamic/quran/audio/${a}/${b}`, {}, "apikey"), "", m)
      },
      isQuery: true
}