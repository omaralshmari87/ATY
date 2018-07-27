const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
hello may I get to know you
By this server :rose: 
  [ https://discord.gg/DeSUK8E ]
 
Special invitation to you... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN); 
