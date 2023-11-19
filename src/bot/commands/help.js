const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports = {
    name: "help",
    cooldown: 0, // Remove the cooldown
    aliases: ["commands", "auda"],
    run: async (bot, message, args) => {
        message.react('<:Support:1158001418083500052>');

        const embed = new Discord.MessageEmbed()
            .setTitle(`Ultron Help Panel`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`_**Click On the Select Menu Below to __Swap__ help Pages**_\n<:t_arrow:1170269371407536149> - Commands ( tickets )\n<:t_arrow:1170269371407536149> -Features\n<:t_arrow:1170269371407536149> - Support`)
            .setColor(`#0x2F3136`);

        const embed2 = new Discord.MessageEmbed()
            .setTitle(`Ticket Commands`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`**__Here Are My Commands:__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
            .setColor(`#0x2F3136`);

        const embed3 = new Discord.MessageEmbed()
            .setTitle(`My Features`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`**Hello, I'm TicketPro, an Advanced Ticket bot with exciting features:**\n
- 🎟️ **Ticket System:** Create and manage support tickets effortlessly.
- 📜 **Transcript:** Automatically generate chat transcripts for your records.
- ❌ **Remove Tickets:** Delete old or unnecessary tickets with ease.
- 🏓 **Ping:** Check the bot's latency and responsiveness.
- 📝 **Open and Close Tickets:** Control ticket status as needed.
- 🤖 **Customizable:** Customize your ticket system to match your server's style.
- 💡 **User-Friendly:** A user-friendly menu-based interface for seamless ticket management.
- 🔒 **Security:** Protect your tickets with secure access control.
- ✨ **Premium Commands:** Unlock even more powerful features with premium Version.
- 🌐 **Multi-server Support:** Efficiently handle support for multiple servers.
- 🔧 **Constant Updates:** We're actively developing new features to improve your experience.`)
            .setColor(`#0x2F3136`);

        const embed4 = new Discord.MessageEmbed()
            .setTitle(`Support`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription("For Issues - [Join Support Server](https://discord.gg/BXmUY5jJhU)\nInvite Me - [Click me to Invite](https://discord.com/api/oauth2/authorize?client_id=1169657899258228897&permissions=18584055446641&scope=bot%20applications.commands)\nVote Me - [Click me to Vote](https://discord.gg/BXmUY5jJhU)")
            .setColor(`#0x2F3136`);

        let option2 = new MessageMenuOption()
            .setLabel('Commands')
            .setValue('option2')
            .setEmoji("1156130907586039828")
            .setDescription('View Ticket Commands');

        let option3 = new MessageMenuOption()
            .setLabel('Features')
            .setValue('option3')
            .setEmoji("1156234171207909540")
            .setDescription('View My Features');

        let option4 = new MessageMenuOption()
            .setLabel('Support')
            .setValue('option4')
            .setEmoji("1170280186705625109")
            .setDescription('Join our Support Server, Invite, and Vote');

        let select = new MessageMenu()
            .setID('selector')
            .setPlaceholder('Select a Page')
            .setMaxValues(1)
            .setMinValues(1)
            .addOptions(option2, option3, option4);

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b);

        collector.on("collect", (b) => {
            if (b.clicker.user.id !== message.author.id)
                return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type !help\``, true);

            if (b.values[0] == "option2") {
                Sendmenu.edit(embed2, select);
            }

            if (b.values[0] == "option3") {
                Sendmenu.edit(embed3, select);
            }

            if (b.values[0] == "option4") {
                Sendmenu.edit(embed4, select);
            }
            b.reply.defer();
        });
    }
};
