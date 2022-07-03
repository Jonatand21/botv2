module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

//alla help commands//
          
            message.channel.send({
                embed: {
                    color: 'BLACK',
                    author: { name: 'banes HELP PANNEL' },
                    footer: { text: 'Created by Jonatand21' },
                    fields: [
                        { name: 'Music commands', value: music },
                        { name: 'Other commands', value: infos },
                    ],
                    timestamp: new Date(),
                    description: `In order to use the banes bot, use the prefix "banes" flollowed by the command name. To get help on a-Specific command dm the devloper.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'BLACK',
                    author: { name: 'banes HELP PANNEL' },
                    footer: { text: 'Created by Jonatand21' },
                    fields: [
                        { name: 'Command name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'How to use:', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};