const { MessageButton } = require('discord-buttons');
const Discord = require('discord.js');

module.exports = {
    name: "invite",
    run: async (bot, message, args) => {
        
        const embed = new Discord.MessageEmbed()
            .setTitle("Invite Me")
            .setColor("#3498DB")
            .setDescription("You can invite me to your server and join our support server with the following links:")
            .addField("Invite Bot", "[Click Here](https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=BOT_PERMISSIONS&scope=bot%20applications.commands)", true)
            .addField("Support Server", "[Join Here](https://discord.gg/YOUR_SUPPORT_SERVER_INVITE)", true);

        
        message.channel.send(embed);
    }
};
