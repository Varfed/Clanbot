const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let reason = args.slice(1).join(' ');

  let user = message.mentions.users.first();

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("У Вас нет прав на это");

  let incidentchannel = message.guild.channels.find(`name`, "logs");
  if(!incidentchannel) return message.channel.send("Не найден logs канал.");
  if (reason.length < 1) return message.reply('Укажите причину.');
  if (message.mentions.users.size < 1) return message.reply('Вы должны упомянуть кого-то!').catch(console.error);
  if(user == message.author) return;
  if (!message.guild.member(user).kickable) return message.reply('Я не могу кикнуть его');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Кик')
    .addField('Пользователь', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Модератор:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Причина', reason);

    user.send(`Вас кикнули с ${message.guild.name}, причина : ${reason}`)
    const msg = await message.channel.send("Kick function");
    msg.edit(`***Я изгнал пользователя! Id: ${user.id}***`);

  return bot.channels.get(incidentchannel.id).sendEmbed(embed);


}

module.exports.help = {
    name: "kick"
}