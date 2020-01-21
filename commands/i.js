const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
  
    await message.delete();
   
    let authorа = message.author.id
    
    let role = message.guild.roles.find(r => r.id == '661210795643764736')

    if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
    
    message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
    
      if(!authorа === "428123576806408193") return;
    if(authorа === "428123576806408193"){
      message.channel.send(`Привет! Вот и подходит к концу 2019 год. Давайте подведем итоги (немного статистики): \n \n 1. К нам присоединилось **более 350 человек! ** \n 2. Были ** созданы 3 клана.** \n 3. **Было много интересных рубрик (например в начале года, задай вопрос разработчику) ** \n 4. Летом у нас было более **30** человек в кланах! \n 5. Было написано **более 18 500 сообщений**. \n \n *Большое спасибо* Вам за этот год. **С праздником, Выжившие** `)
        message.channel.send('https://tenor.com/view/2020-new-year-happy-new-year-clock-gif-15043653')
        message.channel.send('<@&538246982364299275>')
    }

      /*
    message.channel.send("Привет! Скоро новый год, пора восстановить клан. Сейчас я проверяю, сколько участников осталось. Нажимайте на эмодзи под сообщением. До встречи =) <@&538246982364299275>")
    message.channel.send("https://pa1.narvii.com/6445/079b85de6a01753108b0a77ce05ec83269cc1586_hq.gif")
*/
    


}

module.exports.help = {
    name: "i"
}