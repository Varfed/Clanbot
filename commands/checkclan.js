const Discord = require("discord.js")
const mongoose = require("mongoose")
let on_of = true

module.exports.run = async (bot, message, args) => {
    await message.delete();

    let role = message.guild.roles.find(r => r.id == '661210795643764736')

if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))

}

module.exports.help = {
    name: "clan"
}