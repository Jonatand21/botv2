module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    const prefix = client.config.discord.prefix;
    msg = message.content.toLowerCase();
    boolen = true;
    if (msg.indexOf(prefix.toLowerCase()) !== 0){
        boolen = false
     if(msg.indexOf('.alla')!== 0) return;
    }


    const args = message.content.slice(boolen ? prefix.length : '.alla'.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if (cmd) 
    if(typeof cmd.admin === 'undefined' || CheckAdmin(message.author.id) )
        cmd.execute(client, message, args);
};

function CheckAdmin(id){
    lista = [662465744210231326]
for(i=0;i<lista.length;i++){
    if(lista[i] == id)return true;
}
return false;
}