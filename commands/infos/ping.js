module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.ping} Pong. Server ping: **${client.ws.ping}ms** !`);
    },
};