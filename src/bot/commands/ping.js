const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    cooldown: 7,
    aliases: ["ping"],
    run: async(client, message) => {
        try {
            var states = "<a:hydroxonline:887679089123680256> Excellent";
            var states2 = "<a:hydroxonline:887679089123680256> Excellent";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "<a:hydroxonline:887679089123680256> Good";
            if (Number(msg) > 170) states = "<:idle:892930534471249991> Not Bad";
            if (Number(msg) > 350) states = "<a:hydroxoffline:887679122371907585> Soo Bad";
            if (Number(api) > 70) states2 = "<a:hydroxonline:887679089123680256> Good";
            if (Number(api) > 170) states2 = "<:idle:892930534471249991> Not Bad";
            if (Number(api) > 350) states2 = "<a:hydroxoffline:887679122371907585> Soo Bad";
            if (message.author.bot) return;
            message.react('887650847327158343');
            message.channel.send(
                new MessageEmbed()
                .setColor("#2F3136")
                .setAuthor(message.author.username, message.author.avatarURL())
                .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
                .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
                .setTimestamp()
                .setFooter(`Request By ${message.author.tag}`)
            );
        } catch (err) {
            return;
        }
    }
};
