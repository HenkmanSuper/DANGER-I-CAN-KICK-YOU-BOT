const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new Client();


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


bot.login(token);
