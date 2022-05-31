require("dotenv").config();
const {
    Client,
    Collection,
    Intents,
    MessageActionRow,
    MessageButton,
  } = require("discord.js");

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

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login(process.env.TOKEN)