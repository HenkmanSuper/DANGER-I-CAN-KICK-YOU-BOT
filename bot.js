const discord = require("discord.js");
const Client = new Discord.Client();


bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`);

});


bot.on("massage", async massage =>{

if(massage.author.bot) return;

if(massage.channel.typ === "dm") return;

var prefix = _prefix;

var massageArray = massage.content.split(" ");

var commend = MessageArray[0];

var arguments = MessageArray.slice(1);

if(commend === `${prefix}hallo`)

return massage.channel.send("HALLO!!");



});


client.login(process.env.BOT_TOKEN);
