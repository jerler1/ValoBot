require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
const client = new Client({ intents: myIntents });

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
];

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.on("message", (msg) => {
  console.log("This is working");
  if (msg.content === "ping" || msg.content === "!!ping") {
    msg.reply("pong");
  }
});

client.login(process.env.TOKEN);
