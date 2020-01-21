const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete(1000)
    
    let reason = args.slice(1).join(' ');

  let user = message.mentions.users.first();

  if(!message.author.id == '428123576806408193') return errors.noPerms(message, "KICK_MEMBERS");

  if (message.mentions.users.size < 1) return message.reply('Вы должны упомянуть кого-то').catch(console.error);

  message.guild.member(user).kick();
  user.send(`Вас кикнули с ${message.guild.name}, причина : no application`)

}

module.exports.help = {
    name: "ekick"
}