const Discord = require('discord.js')
const config = require('../config.json')
let on_of = true

module.exports.run = async (bot, message, args) => {

    const Hembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Команды системного бота Python:")
    .setDescription("<> - Обязательный параметр, {} - параметр по желанию.")
    .addField(`${config.prefix}add <@user> <role>`, 'Добавить в базу данных.')
    .addField(`${config.prefix}addme <role>`, 'Добавить меня в базу данных.')
    .addField(`${config.prefix}addclan <@user> <clan>`, 'Добавить пользователя в базу кланов.')
    .addField(`${config.prefix}ban <@user> <reason>`, 'Забанить пользователя.')
    .addField(`${config.prefix}kick <@user> <reason>`, "Выгнать пользователя.")
    .addField(`${config.prefix}clear <messages>`, "Очистить чат.")
    .addField(`${config.prefix}unban <id>`, 'Разбанить пользователя.')
    .addField(`${config.prefix}mute <@user> <reason>`, 'Заглушить пользователя.')
    .addField(`${config.prefix}unmute <@user>`, 'Убрать заглушку у пользователя.')
    .addField(`${config.prefix}approve <@user>`, 'Изменить роль у рекрутов.')
    .addField(`${config.prefix}kickall`, 'Кикнуть рекрутов.')
    .addField(`${config.prefix}py {first или sec} <@user>`, 'Добавить роль Registered Member (Также роли python или +python+).')
    .addField(`${config.prefix}bunker`, 'Бункер код.')
    .addField(`${config.prefix}form`, 'Форма заявки в клан.')


    message.channel.send(Hembed)
}

module.exports.help = {
    name: "help", 
    name: "h"
}