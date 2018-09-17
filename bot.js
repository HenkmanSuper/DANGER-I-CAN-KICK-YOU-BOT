const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKEN)





  client.on('message', message => { 
  var prefix = '!#!'
  if(message.content.toLowerCase() ===  `${prefix}gevaar`){
     
    message.channel.send('IK BEN ONLINE BAAS!')
    
}
   
 
   
   
})






  client.on('message', message => { 
  var prefix = ''
  if(message.content.toLowerCase() ===  `${prefix}gevaar`){
     
    message.channel.send('DANGER!! DANGER!!')
    message.channel.send('ER IS GEVAAR!!')
    message.channel.send('RED JE ZELF!!')
    
}
   
 
   
   
})






  client.on('message', message => { 
  var prefix = ''
  if(message.content.toLowerCase() ===  `${prefix}hallo`){
     
    message.channel.send('.HALLO!!')
    message.channel.send('.zeg hallo super pieter!')
    
}
   
 
   
   
})

