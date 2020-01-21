const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("У Вас нет прав на это");

  let reason = args.slice(1).join(' ');
  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let user = args[0];
  if (!user) return message.reply('Вы должны упомянуть пользователя, или вставить его id.').catch(console.error);
  message.guild.unban(user);
  message.channel.send(`Пользователь ${user} был разбанен.`)

}

module.exports.help = {
    name: "unban"
}