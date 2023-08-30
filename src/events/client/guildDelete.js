//Cuando el bot es eliminado de un server, ejecuta este comando
const mongoose = require('mongoose');
const Log = require('../../schemas/log');

module.exports = {
	name: 'guildDelete',
	async execute(guild) {
    logMessage = await new Log({
      _id: mongoose.Types.ObjectId(),
      message: `SuguBot ha sido eliminado de un server: ${guild.id}`,
    });

    await logMessage.save();
	}
}