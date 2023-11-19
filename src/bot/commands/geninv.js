const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["generate_invite"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`693553429380857978`)) return  message.reply('**<:hydroxerror:887650892852125746> ONLY MY OWNER CAN USE THIS COMMAND! <:hydroxerror:887650892852125746>**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite Ultron`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**<a:t_arrow:1170269371407536149> Invite Me [here](https://discord.com/api/oauth2/authorize?client_id=892893537203527721&permissions=8&scope=bot)**\n\n**Note: _Only my owner can invite me!_**`)
  .setColor(`#0x2F3136`));
	}
};