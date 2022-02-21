// this works! :D

import { Guild } from 'discord.js';

const guild = client.guilds.cache.get('794988966590808124') as Guild;

await guild.commands.set([{
    name: 'test',
    description: 'testt',
}]);

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'test') {
        interaction.deferReply();
        setTimeout(() => {
            interaction.editReply('working :o');
        }, 4000);
    }
});
