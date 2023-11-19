const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function (client) {
    console.log(chalk.yellow.bold(figlet.textSync("Ticket Bot")));

    // Set the bot's status to "Streaming" with the provided URL
    await client.user.setActivity('Tickets 🎫', { type: 'STREAMING', url: 'https://twitch.tv/#' });

    console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready"));
}
