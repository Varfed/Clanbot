const Discord = require("discord.js")
let on_of = true

module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(on_of){
    let dbUserr = message.mentions.members.first();
    if(!dbUserr) return message.reply("Вы не указали пользователя")
    let rolle = args.slice(1).join(" ");
    if(!rolle) return message.reply("Вы не указали роль!")
    let log = message.guild.channels.find('id', '659793661638344706')


    log.send(`Ник - ${dbUserr.user.username}, \nРоль - ${rolle}, \n ID - ${dbUserr.id}`)
    log.send('``` ```')


    // const addbase = new Base ({
    //     _id: mongoose.Types.ObjectId(),
    //     role: rolle,
    //     bName: dbUserr.user.username,
    //     bId: dbUserr.id
    // })
    // addbase.save()
    // .then(result => console.log(result))
    // .catch(err => console.log(err))
    message.channel.send("Пользователь " + dbUserr + " добавлен в базу данных! ")
    } else {
        message.reply("Команда выключена!")
    }
}

module.exports.help = {
    name: "add"
}