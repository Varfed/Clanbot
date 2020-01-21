const Discord = require("discord.js")
let on_of = true

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("У Вас нет прав на это");
    await message.delete();
    let user = message.mentions.members.first()
    if(!user) return message.reply("Укажи пользователя")
    let opRole = message.guild.roles.find('id', '544610262590685194')
    let deRole = message.guild.roles.find('id', '544069737777463296')

    await(user.addRole(opRole.id));
    await(user.removeRole(deRole.id));

  }
module.exports.help = {
    name: "approve"
}