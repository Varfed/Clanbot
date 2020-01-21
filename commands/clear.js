
const Discord = require('discord.js')
let on_of = true

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_CHANNELS ')) return message.reply("У Вас нет прав на это");
    
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof.");
  message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Удалено ${args[0]} сообщений.`).then(msg => message.delete(5000))
  })
}

module.exports.help = {
    name: "clear"
}
