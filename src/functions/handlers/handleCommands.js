const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
	client.handleCommands = async () => {
		const commandFolders = fs.readdirSync('./src/commands');
		for (const folder of commandFolders) {
			const commandFiles = fs.
				readdirSync(`./src/commands/${folder}`)
				.filter(file => file.endsWith(".js"));

			const {commands, commandArray} = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArray.push(command.data.toJSON())
			}

		}

		const clientId = '1145104352579686470';
		const guildId = '1144397046997069855';

		const rest = new REST({version: "10"}).setToken(process.env.token);
		
		try {
			console.log('Started refreshing application (/) commands.');

			/*
			Si lo queremos utilizar solo en una guild especifica, usamos esto
			await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
				body: client.commandArray,
			});
			*/

			//Si lo queremos para todas las guilds, usamos esto
			await rest.put(Routes.applicationCommands(clientId), {
				body: client.commandArray,
			});

			console.log('Successfully refreshing application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	}
}