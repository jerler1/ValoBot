require("dotenv").config();
const { Client, Intents } = require("discord.js");

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
myIntents.add(Intents.FLAGS.GUILD_MESSAGES);
myIntents.add(Intents.FLAGS.GUILD_PRESENCES);
myIntents.add(Intents.FLAGS.GUILD_MEMBERS);
myIntents.add(Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS);
myIntents.add(Intents.FLAGS.GUILD_MESSAGE_TYPING);
myIntents.add(Intents.FLAGS.GUILD_MESSAGE_REACTIONS);
myIntents.add(Intents.FLAGS.DIRECT_MESSAGES);

const client = new Client({ intents: myIntents });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("interactionCreate", async (interaction) => {
//   console.log(interaction);
//   if (!interaction.isCommand()) return;

//   const { commandName } = interaction;

//   if (commandName === "ping") {
//     await interaction.reply("Pong!");
//   }
// });

client.on("messageCreate", (msg) => {
  console.log(msg);
  if (msg.content === "ping" || msg.content === "!!ping") {
    msg.reply("pong");
  }
  if (msg.content === "ying") {
    msg.reply("yang");
  }
});

client.login(process.env.TOKEN);
