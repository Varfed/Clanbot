const Discord = require("discord.js")
let on_of = true


module.exports.run = async (bot, message, args) => {
    await message.delete();
    let cUser = message.mentions.members.first();
    if(!cUser) return message.reply("Вы не указали пользователя!")
    let clann = args.slice(1).join(" ");
    if(!clann) return message.reply("Вы не указали клан!")

    let log = message.guild.channels.find('id', '659793636992745505')

    log.send(`Nickname - ${cUser}, \n Clan - ${clann}, \n ID - ${cUser.id}`)
    log.send('``` ```')

    message.channel.send("Готово!")

    
}

module.exports.help = {
    name: "addclan"
}
