const Discord = require("discord.js")
let on_of = true

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let dbUser = message.author;
    let rolle = args.join(' ')
    if(!rolle) return message.reply("Вы не указали роль!")
    let log = message.guild.chanels.find('id', '659793661638344706')

    log.send(`Ник - ${dbUserr.user.username}, \nРоль - ${rolle}, \n ID - ${dbUserr.id}`)
    log.send('``` ```')

    message.channel.send("Пользователь " + dbUser.username + " добавлен в базу данных.")
}

module.exports.help = {
    name: "addme"
}