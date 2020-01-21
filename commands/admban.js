let on_of = true
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {



    let reason = args.slice(1).join(' ')
    let user = message.mentions.users.first();
  
    if(!message.member.id == '428123576806408193') return message.channel.send("Вы не");
  
    if(message.mentions.users.size < 1) return message.reply('Вы должны упомянуть кого-то').catch(console.error);

    message.guild.ban(user, 2)
  
    const banw = new Discord.RichEmbed()
    .setDescription("Function")
    .setColor('RANDOM')
    .setTimestamp()
    .addField("Action", "Бан")
    .addField("Пользователь:", `${user.username}#${message.author.discriminator}`)
    .addField("Модератор", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", `${user.id}` );
  
   
  user.send(`Вас забанили на сервере ${message.guild.name}, причина: ${reason}`)

  

}

module.exports.help = {
    name: "eban"
}