const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("У Вас нет прав на это");

    let user = message.mentions.users.first();

  let iMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!iMember) return message.reply("Надо тегнуть пользователя");

  let incidentchannel = message.guild.channels.find(`name`, "logs");
  if(!incidentchannel) return message.channel.send("Не найден канал logs.");

///let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'muted');

let sRole = message.guild.roles.find(`name`, `muted`)
if(!sRole){
  try{
    sRole = await message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  }catch(e){
    console.log(e.stack);
  }
}




await(iMember.removeRole(sRole.id))
const embed = new Discord.RichEmbed()
.setDescription(`Модератор ${message.author}`)
.setColor("#0000000")
.addField("Пользователь", iMember)
.addField("Было в канале:", message.channel)
.addField("Сообщение было создано в", message.createdAt)

.addField("Результат", "С пользователя сняли мут");

message.channel.send(`***С пользователя ${iMember} снята заглушка!***`)

  incidentchannel.send(embed);


}

module.exports.help = {
    name: "unmute"
}