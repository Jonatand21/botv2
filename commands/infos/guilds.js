const {MessageEmbed } = require(`discord.js`);
module.exports = {
    name: `guilds`,
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}guilds',
    execute(client,message) {
      const Guilds = client.guilds.cache.map(guild => guild.name);
         let stopembed =  new MessageEmbed()
            .setTitle('Guilds')
            .setColor('GREEN')
            .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL());
          dis = '';
          nummer = 1;
          for(i = 0;i<Guilds.length;i++){
            dis +=   (i+1) + ": " + Guilds[i] + "\n";
            }
          stopembed
              .setDescription(dis);
          message.channel.send(stopembed);
        
              }
            }