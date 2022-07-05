const {MessageEmbed } = require(`discord.js`);
module.exports = {
    name: `stopspam`,
    aliases: [],
    category: 'fun',
    utilisation: '{prefix}stopspam',
    admin:true,
  async execute(client,message,args) {
    finns = false;
    index = 0;
    for(i=0;i<client.Ginfo.length;i++){
        if(message.guild.id == client.Ginfo[i].id){
         finns = true;
          index = i;
        }
    }
    if(finns == false){
      index = client.Ginfo.length;
        client.Ginfo.push(new Guild(message.guild.id));
        console.log("Created new guild :" + message.guild.name)
    }
    console.log(args);
    if(args.length == 0){
      stopembed =  new MessageEmbed()
         .setTitle('Active spams')
         .setColor('GREEN')
         .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
         .setThumbnail(client.user.displayAvatarURL());
       dis = '';
       nummer = 1;
       for(i = 0;i<client.Ginfo[index].spams.length;i++){
         if(client.Ginfo[index].spams[i].stop){
         dis +=   nummer + ", Meddelande = "+ client.Ginfo[index].spams[i].message + ", Kanal/person= " + client.Ginfo[index].spams[i].channel.name;
           nummer++
         }
       }
       stopembed
           .setDescription(dis);
       message.channel.send(stopembed);
       }
      
        nummer = parseInt(args[0]);
        console.log(nummer);
        if(nummer == NaN){
        message.reply("please write a valid number");
        return;
      }
      for(i = 0;i<client.Ginfo[index].spams.length;i++){
        if(client.Ginfo[index].spams[i].stop){
          nummer--;
          console.log(nummer);
          if(nummer==0){
            client.Ginfo[index].spams[i].stop = false;
            console.log(client.Ginfo[index].spams[i].stop);
  }
          }
      }
        
  }
}




  
class spam {
  constructor(meddelande, kanal) {
    this.message = meddelande;
    this.channel = kanal;
    this.stop = true;
  }
}
class Guild {
  constructor(id){
    this.spams = [];
    this.id = id;
  }
}