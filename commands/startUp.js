const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("startUp")
    .setDescription("Replies with start up information!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
