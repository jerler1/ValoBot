const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("startup")
    .setDescription("Replies with start up information!"),
  async execute(interaction) {
    await interaction.reply("Detecting server.");
    await interaction.reply("System booted successfully.")
  },
};
