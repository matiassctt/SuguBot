//Evento que se ejecuta una unica vez cuando se inicia el bot

module.exports = {
	name: 'ready',
	once: 'true',
	async execute(client) {
		console.log(`Ready!!! ${client.user.tag}`);
	}
}