const fs = require("fs")
const chalk = require("chalk")

global.reloadFile = (file, options = {}) => {
    nocache(file, module => console.log(`File "${file}" has updated`))
}

global.user = require("./data/user")
global.group = require("./data/group")
global._user = JSON.parse(fs.readFileSync("./database/user.json"))
global._group = JSON.parse(fs.readFileSync("./database/group.json"))

global.mess = (type, m) => {
    let msg = {
        wait: 'Wait, in progress',
        owner: 'This command can only be used by the Owner!',
        premium: 'This command can only be used by Premium!',
        group: 'This command can only be used in groups!',
        private: 'This command can only be used in private chat!',
        admin: 'This command can only be used by group admins!',
        botAdmin: 'Bot is not admin, can\'t access the feature',
        bot: 'This feature can only be accessed by Bots',
        dead: 'This feature is being turned off!',
        media: 'Reply media',
        error: "No Results Found"
    }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}

function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update File "${file}"`))
})