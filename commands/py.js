const Discord = require('discord.js')
const config  = require('../config.json')

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("У Вас нет прав на это");
    let regRole = message.guild.roles.find('id', '538246982364299275')
    let user = message.mentions.members.first()
    if(!user) return message.reply("Укажи пользователя")
    await(user.addRole(regRole.id))



    if(args[0] == "first"){
        let pyRole = message.guild.roles.find('id', '547833472379650049')
        await(user.addRole(pyRole.id))
    } else if (args[0] == 'sec') {
        let pyRole = message.guild.roles.find('id', '552860009181216769')
        await(user.addRole(pyRole.id))
    } else if (args[0] == 'help') {
        message.reply(`${config.prefix}py [first or sec] <@user>`)
    }
    message.channel.send("Готово!")
}

module.exports.help = {
    name: "py"
}