const { Client, CommandInteraction } = require('discord.js');

module.exports = {
    data: {
        name: 'ping',
        description: 'Ping the bot to check its latency.',
    },
    async execute(interaction) {
        const ping = Date.now() - interaction.createdTimestamp;
        await interaction.reply(`Pong! Bot latency is ${ping}ms.`);
    },
};
