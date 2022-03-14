const { Client } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
  intents: [
    "GUILDS", 
    "GUILD_MEMBERS"
  ] 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Test", {type: "PLAYING"});
});

const roleId = "451396167276822529";

client.on("guildMemberAdd", (member) => {
  member.roles.set([roleId]);
});

client.login(process.env.TOKEN);