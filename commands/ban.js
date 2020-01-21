
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  let on_of = true

    let reason = args.slice(1).join(' ')
    let user = message.mentions.users.first();
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
  
    if(reason.length < 1) return message.reply("Укажите причину для бана!");
    if(message.mentions.users.size < 1) return message.reply('Вы должны упомянуть кого-то.').catch(console.error);
    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Не найден logs канал.");
  
    if(user == message.author) return;
    if(!message.guild.member(user).bannable) return message.reply("Нет.");
    message.guild.ban(user, 2);
  
    const banw = new Discord.RichEmbed()
    .setDescription("Function")
    .setColor('RANDOM')
    .setTimestamp()
    .addField("Action", "Бан")
    .addField("Пользователь:", `${user.username}#${message.author.discriminator}`)
    .addField("Модератор", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", `${user.id}` );
  
    message.channel.send(`Пользователь ${user.username} забанен.`)
  user.send(`Вас забанили на сервере ${message.guild.name}, причина: ${reason}.`)
    return incidentchannel.send(banw);
  

}

module.exports.help = {
    name: "ban"
}