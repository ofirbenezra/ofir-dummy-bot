// require('dotenv').config();
const { Client, Intents, ClientVoiceManager } = require("discord.js");
// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
// const profanityChecker = require('./profanity-checker');

dotenv.config();
const token = process.env.DISCORD_BOT_TOKEN;
console.log('Stating the Bot');
const client = new Client({ 
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


client.on('ready', () => {
   // List servers the bot is connected to
   console.log("Servers:")
   client.guilds.cache.forEach((guild) => {
      console.log(" - " + guild.name + '' + guild.id)


      // List all channels
      guild.channels.cache.forEach((channel) => {
         console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
      })
   })
   // const Guilds = client.guilds.cache.map(guild => guild.id);
   //  console.log(Guilds);
})


console.log('before login');
client.login(token);