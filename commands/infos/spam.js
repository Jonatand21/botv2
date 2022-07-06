module.exports = {
    name: `spam`,
    aliases: [],
    category: 'fun',
    utilisation: '{prefix}spam',
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
  switch(args[0]){
    case "dm":
       try{
         if(args[1][0] == "<"){
            person = await client.users.fetch(args[1].substr(2,args[1].length-3));
         }
         else{
          person = await client.users.fetch(args[1]);
         }
        }
    catch(exception){
      message.reply("You need to add a person");
      return;
    }
      meddelande = '';
      for(i = 2;i<args.length;i++){
        meddelande += args[i] + " ";
      }
      if(meddelande == ""){
        message.reply("Write a message");
        break;
      }
      else{
        let temp = await message.channel.send("1 message sent to " + person.tag);
        item = new spam(meddelande,person);
          client.Ginfo[index].spams.push(item);
          console.log("Börjar spammar " + client.Ginfo[index].spams[client.Ginfo[index].spams.length-1].channel.tag + " med meddelandet " + client.Ginfo[index].spams[client.Ginfo[index].spams.length-1].message);
          Spam(client,index,client.Ginfo[index].spams.length-1,true,1,temp);
        break;  
  }
    case "say":
      meddelande = '';
      for(i = 1;i<args.length;i++){
        meddelande += args[i];
      }
      if(meddelande == ""){
        message.reply("write a message");
        break;
      }
          item = new spam(meddelande,message.channel);
          client.Ginfo[index].spams.push(item);
          Spam(client,index,client.Ginfo[index].spams.length-1,false);
          break;

          default: 
          message.reply(client.config.discord.prefix + " spam dm/say")

        }
        
  }
}
async function Spam(client,index,a,bool,messagecount,editmessage){
  try{
  await client.Ginfo[index].spams[a].channel.send(client.Ginfo[index].spams[a].message);
  if(bool){
  messagecount++
  await editmessage.edit(messagecount + " message sent to " + client.Ginfo[index].spams[a].channel.tag); 
  }
  }
  catch(exception){
    try{
    await editmessage.edit(messagecount + " message sent to " + client.Ginfo[index].spams[a].channel.tag + ', ' + exception);
    }
    catch{
      console.log("Could not edit message");
    }
    client.Ginfo[index].spams[a].stop = false;
  }
  if(client.Ginfo[index].spams[a].stop)
  Spam(client,index,a,bool,messagecount,editmessage);
  
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
 