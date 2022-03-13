const { Client } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
  intents: [
    "GUILDS", 
    "GUILD_MESSAGES"
  ] 
});

const guildId = 951618942907060224;
const botId = 951617517812604949;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Test", {type: "PLAYING"});
});

client.on("messageCreate", (message) => {
  if  (message.content === "ping") {
    message.reply('pong');
  } 
})

client.login(process.env.TOKEN);