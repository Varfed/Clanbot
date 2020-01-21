const Discord = require('discord.js')



module.exports.run = async (bot, message, args) => {

    let BCembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/540456559667445761/661597611274534918/S91231-18520686.jpg')

    message.channel.send(BCembed)
}

module.exports.help = {
    name: "bunker"
}