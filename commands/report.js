const Discord = require("discord.js")
const mongoose = require("mongoose")
// mongoose.connect('mongodb://localhost/BOT', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const Report = require("../models/report.js")

module.exports.run = async (bot, message, args) => {
await message.delete();
let rUser = message.mentions.members.first();
if(!rUser) return message.reply("No")
let rreason = args.slice(1).join(" ");
if(!rreason) return message.reply("No no");



// const report = new Report({
//     _id: mongoose.Types.ObjectId(),
//     username: rUser.user.username,
//     userId: rUser.id,
//     reason: rreason,
//     rUsername: message.author.username,
//     rId: message.author.id,
//     time: message.createdAt
// })

// report.save()
// .then(result => console.log(result))
// .catch(err => console.log(err))

message.reply("Репорт сохранен!")

}

module.exports.help = {
    name: "report"
}