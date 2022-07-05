module.exports = {
    name: `unban`,
    aliases: [],
    category: 'fun',
    utilisation: '{prefix}unban number',
    admin:true,
async execute(client, message, args) {
    const Guilds = client.guilds.cache.map(guild => guild);
    index = parseInt(args[0]);
    console.log(index)
    if(isNaN(index)){
      message.reply("write a number");
      return;
    }
    try{
    const kanaler = Guilds[index].channels.cache.map(TextChannel => TextChannel);
    }
    catch(err){
        message.reply("Could not find guild");
        return;
    }
    let index2 = 0;
    let con = true;
    while(con){
      if(kanaler[index2].type == "text")
      con = false;
      else
      index2++;
    }
    try{
      console.log(kanaler[index2]);
      let invite = await kanaler[index2].createInvite();
      console.log(invite)
      await message.reply("https://discord.gg/" + invite.code);
      await Guilds[index].members.unban(message.author);
    }
    catch(err){
      console.log(err);
      message.reply("Unban failed, " + err)
    }
  }
}