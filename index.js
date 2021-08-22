require("dotenv").config();
const { Client, Intents } = require("discord.js");

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
const client = new Client({ intents: myIntents });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
});

client.on("message", (msg) => {
  console.log("This is working");
  if (msg.content === "ping" || msg.content === "!!ping") {
    msg.reply("pong");
  }
});

client.login(process.env.TOKEN);
