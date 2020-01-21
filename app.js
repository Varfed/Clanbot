const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection()
const fs = require("fs");
const token = process.env.token;


fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    jsfile.forEach((f, i) => {
        
        let props = require(`./commands/${f}`)
        console.log(`${f} : ✔`)
        bot.commands.set(props.help.name, props)
    })
    console.log('--------------')
})

fs.readdir("./tags/", (err, files) => {
    console.log("------------")
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    jsfile.forEach((f, i) => {
        
        let props = require(`./tags/${f}`)
        console.log(`${f} : ✔`)
        bot.commands.set(props.help.name, props)
    })
    console.log("------------")
})

bot.on("ready", () => {
    bot.user.setPresence({
        game: { 
            name: 'Наше будущее',
            type: 'WATCHING'
        },
        status: "online"
    })
    console.log("Запуск успешно завершен")
  });
  bot.on("guildMemberAdd", async member => {
    member.guild.channels.get('538248946229837834').send(`${member} присоединился к серверу! Что-бы вступить в клан, **прочитай шаблон** заявки в <#659697334288121867>, и **кинь заявку** в <#538314605756284954>`)

    let recRole = member.guild.roles.find('id', "544069737777463296")
    await(member.addRole(recRole.id));

  });

bot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length))
    if (commandFile) commandFile.run(bot, message, args)



})


bot.login(token)