module.exports = {
    name: "register",
    aliases: ["verify"],
    desc: "Add User To Database",
    type: "play",
    example: "%prefix%command",
    start: async(killua, m) => {
        const { pushName, sender } = m
        constUserName = `${pushName === undefined ? sender.split("@")[0] : pushName}`
        user.addUser(m.sender,username,_user)
        killua.sendText(m.from, "success", m)
    },
    noLimit: true,
}