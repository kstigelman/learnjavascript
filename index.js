const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

const prefix = "!";

banned_words = ['cheffarie', 'cheffrey', 'chefary', 'chefry', 'cheffrie', 'chefrey','chefery', 'chefray', 'cheffy', 'cheff', 'cheffie']



client.on("message", function(message) {
	
  if (message.author.bot) 
  {
	  return;
  }
  if (!message.content.startsWith(prefix)) 
  {
	  return;
  }
  for(var i = 0; i < banned_words.length; i++)
  {
	  if(message.content.strip().lower().includes(banned_words[i]))
	  {
		  message.delete();
	  }
  }
  
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  
  if(command == 'annoy')
  {
	  const taggedUser = message.mentions.users.first();
	  
	  rnd = Math.floor(Math.random() * 10);
	  for(var i = 0; i < rnd * 3; i++)
	  {
		  message.channel.send(`<@${taggedUser.id}>`);
	  }
  }
  
  if(command == 'ping')
  {
	  var latency = Date.now() - message.createdTimeStamp();
	  message.channel.send('Your ping is ' + latency);
  }
  
});

