const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	execute: async function(client, interaction) {
		await interaction.reply('Pong!');
	}
};
