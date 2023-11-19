const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { token } = process.env; // Ensure you have 'TOKEN' in secrets

const commands = [];
const commandFiles = require('fs').readdirSync('./src/bot/commands/slash').filter(file => file.endsWith('.js'));

const guildId = '1119870097612349511'; // Replace with your guild ID
const clientId = '1169657899258228897'; // Replace with your bot's client ID
const ownerId = '961930771344523264'; // Replace with your bot owner's user ID

for (const file of commandFiles) {
  const command = require(`./bot/commands/slash/${file}`);
  commands.push(command.data);
}

const rest = new REST({ version: '10' }).setToken(token);

const deployCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands for a specific guild.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId), // Use 'applicationGuildCommands' for guild-specific commands
      { body: commands },
    );



    console.log('Successfully reloaded application (/) commands for the guild.');
  } catch (error) {
    console.error(error);
  }
};

deployCommands();

const deploySlashCommandsGlobally = async () => {
  // Check if the user executing the command is the owner
  if (ownerId === ownerId) {
    try {
      console.log('Deploying slash commands globally.');

      await rest.put(
        Routes.applicationCommands(clientId), // Use 'applicationCommands' for global commands
        { body: commands },
      );

      console.log('Successfully deployed application (/) commands globally.');
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('User is not authorized to deploy commands globally.');
  }
};

deploySlashCommandsGlobally();
