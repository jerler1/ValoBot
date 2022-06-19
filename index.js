require("dotenv").config();
const Database = require('better-sqlite3')
const { intents } = require('./config/intents')
const {
  Client,
  Collection,
  Intents,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

const client = new Client({ intents: intents });

// const db = new Database('valobot.db');

global.__basedir = __dirname;

client.on("ready", () => {
  const guilds = client.guilds.cache.map(guild => guild.id)
  console.log(guilds)
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);